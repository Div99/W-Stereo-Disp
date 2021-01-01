from __future__ import print_function

import torch.utils.data
import math

from .submodule import *


class hourglass(nn.Module):
    def __init__(self, inplanes):
        super(hourglass, self).__init__()

        self.conv1 = nn.Sequential(convbn_3d(inplanes, inplanes * 2, kernel_size=3, stride=2, pad=1),
                                   nn.ReLU(inplace=True))

        self.conv2 = convbn_3d(inplanes * 2, inplanes * 2, kernel_size=3, stride=1, pad=1)

        self.conv3 = nn.Sequential(convbn_3d(inplanes * 2, inplanes * 2, kernel_size=3, stride=2, pad=1),
                                   nn.ReLU(inplace=True))

        self.conv4 = nn.Sequential(convbn_3d(inplanes * 2, inplanes * 2, kernel_size=3, stride=1, pad=1),
                                   nn.ReLU(inplace=True))

        self.conv5 = nn.Sequential(
            nn.ConvTranspose3d(inplanes * 2, inplanes * 2, kernel_size=3, padding=1, output_padding=1, stride=2,
                               bias=False),
            nn.BatchNorm3d(inplanes * 2))  # +conv2

        self.conv6 = nn.Sequential(
            nn.ConvTranspose3d(inplanes * 2, inplanes, kernel_size=3, padding=1, output_padding=1, stride=2,
                               bias=False),
            nn.BatchNorm3d(inplanes))  # +x

    def forward(self, x, presqu, postsqu):

        out = self.conv1(x)  # in:1/4 out:1/8
        pre = self.conv2(out)  # in:1/8 out:1/8
        if postsqu is not None:
            pre = F.relu(pre + postsqu, inplace=True)
        else:
            pre = F.relu(pre, inplace=True)

        out = self.conv3(pre)  # in:1/8 out:1/16
        out = self.conv4(out)  # in:1/16 out:1/16

        if presqu is not None:
            post = F.relu(self.conv5(out) + presqu, inplace=True)  # in:1/16 out:1/8
        else:
            post = F.relu(self.conv5(out) + pre, inplace=True)

        out = self.conv6(post)  # in:1/8 out:1/4

        return out, pre, post


class PSMNet(nn.Module):
    def __init__(self, maxdisp, down):
        super(PSMNet, self).__init__()
        self.maxdisp = maxdisp

        self.down = down

        self.feature_extraction = feature_extraction()

        self.dres0 = nn.Sequential(convbn_3d(64, 32, 3, 1, 1),
                                   nn.ReLU(inplace=True),
                                   convbn_3d(32, 32, 3, 1, 1),
                                   nn.ReLU(inplace=True))

        self.dres1 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                   nn.ReLU(inplace=True),
                                   convbn_3d(32, 32, 3, 1, 1))

        self.dres2 = hourglass(32)

        self.dres3 = hourglass(32)

        self.dres4 = hourglass(32)

        self.classif1 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))

        self.classif2 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))

        self.classif3 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))

        self.semantic1 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))
        self.semantic2 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))
        self.semantic3 = nn.Sequential(convbn_3d(32, 32, 3, 1, 1),
                                      nn.ReLU(inplace=True),
                                      nn.Conv3d(32, 1, kernel_size=3, padding=1, stride=1, bias=False))

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                n = m.kernel_size[0] * m.kernel_size[1] * m.out_channels
                m.weight.data.normal_(0, math.sqrt(2. / n))
            elif isinstance(m, nn.Conv3d):
                n = m.kernel_size[0] * m.kernel_size[1] * m.kernel_size[2] * m.out_channels
                m.weight.data.normal_(0, math.sqrt(2. / n))
            elif isinstance(m, nn.BatchNorm2d):
                m.weight.data.fill_(1)
                m.bias.data.zero_()
            elif isinstance(m, nn.BatchNorm3d):
                m.weight.data.fill_(1)
                m.bias.data.zero_()
            elif isinstance(m, nn.Linear):
                m.bias.data.zero_()

    def interpolate_value_disp(self, x, indices, maxdisp):
        """
        bilinear interpolate tensor x at sampled indices
        x: [B, D, H, W] (features)
        indices: [B, H, W] sampled indices (0-indexed)
        """

        # B,D,H,W to B,H,W,D
        x = x.permute(0,2,3,1)
        indices = torch.unsqueeze(indices, -1)

        indices = torch.clamp(indices, 0, maxdisp - 1)
        idx0 = torch.floor(indices).long()
        idx1 = torch.min(idx0 + 1, (maxdisp - 1) * torch.ones_like(idx0))
        idx0 = torch.max(idx1 - 1, torch.zeros_like(idx0))

        y0 = torch.gather(x, -1, idx0)
        y1 = torch.gather(x, -1, idx1)

        lmbda = indices - idx0.float()
        output = (1 - lmbda) * y0 + (lmbda) * y1

        output = torch.squeeze(output, -1)
        return output

    def off_regress(self, off):
        "Regress offsets in [0, 1] range"
        off = F.tanh(off) * 1.5
        off = torch.clamp(off, min=-1, max=1)*0.5 + 0.5
        return off

    # def off_regress(self, off):
    #     "Regress offsets in [0, 1] range"
    #     off = F.tanh(off)
    #     off = torch.clamp(off, min=-0.5, max=0.5) + 0.5
    #     return off

    def forward(self, left, right, calib, out_std=False, out_cost_volume=False):

        refimg_fea = self.feature_extraction(left)
        targetimg_fea = self.feature_extraction(right)

        # matching
        cost = Variable(
            torch.cuda.FloatTensor(refimg_fea.size()[0], refimg_fea.size()[1] * 2, self.maxdisp // 4, refimg_fea.size()[2],
                              refimg_fea.size()[3]).zero_())

        for i in range(self.maxdisp // 4):
            if i > 0:
                cost[:, :refimg_fea.size()[1], i, :, i:] = refimg_fea[:, :, :, i:]
                cost[:, refimg_fea.size()[1]:, i, :, i:] = targetimg_fea[:, :, :, :-i]
            else:
                cost[:, :refimg_fea.size()[1], i, :, :] = refimg_fea
                cost[:, refimg_fea.size()[1]:, i, :, :] = targetimg_fea
        cost = cost.contiguous()

        cost0 = self.dres0(cost)
        cost0 = self.dres1(cost0) + cost0

        out1, pre1, post1 = self.dres2(cost0, None, None)
        out1 = out1 + cost0

        out2, pre2, post2 = self.dres3(out1, pre1, post1)
        out2 = out2 + cost0

        out3, pre3, post3 = self.dres4(out2, pre1, post2)
        out3 = out3 + cost0

        cost1 = self.classif1(out1)
        cost2 = self.classif2(out2) + cost1
        cost3 = self.classif3(out3) + cost2

        off1 = self.semantic1(out1)
        off2 = self.semantic2(out2) + off1
        off3 = self.semantic3(out3) + off2

        if out_cost_volume:
            return cost3

        if self.training:
            cost1 = F.upsample(cost1, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')
            cost2 = F.upsample(cost2, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')

            off1 = F.upsample(off1, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')
            off2 = F.upsample(off2, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')

            cost1 = torch.squeeze(cost1, 1)
            off1 = torch.squeeze(off1, 1)
            pred1 = F.softmax(cost1, dim=1)
            # off1 = F.sigmoid(off1)
            off1 = self.off_regress(off1)

            # _, pred1_out = torch.max(pred1, 1)
            # pred1_out = pred1_out.float() + 1  # Make 1-indexed
            # off1 = self.interpolate_value(off1, pred1_out)

            cost2 = torch.squeeze(cost2, 1)
            off2 = torch.squeeze(off2, 1)
            pred2 = F.softmax(cost2, dim=1)
            # off2 = F.sigmoid(off2)
            off2 = self.off_regress(off2)

            # _, pred2_out = torch.max(pred2, 1)
            # pred2_out = pred2_out.float() + 1  # Make 1-indexed
            # off2 = self.interpolate_value(off2, pred2_out)

        cost3 = F.upsample(cost3, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')
        off3 = F.upsample(off3, [self.maxdisp // self.down, left.size()[2], left.size()[3]], mode='trilinear')

        cost3 = torch.squeeze(cost3, 1)
        off3 = torch.squeeze(off3, 1)
        pred3 = F.softmax(cost3, dim=1)
        # off3 = F.sigmoid(off3)
        off3 = self.off_regress(off3)

        # For your information: This formulation 'softmax(c)' learned "similarity"
        # while 'softmax(-c)' learned 'matching cost' as mentioned in the paper.
        # However, 'c' or '-c' do not affect the performance because feature-based cost volume provided flexibility.

        if self.training:
            return pred1, pred2, pred3, off1, off2, off3
        else:
            _, pred3_out = torch.max(pred3, 1)
            pred3_out = pred3_out.float()
            off3_out = self.interpolate_value_disp(off3, pred3_out, maxdisp=self.maxdisp // self.down)

            if out_std:
                return (pred3_out + off3_out) * self.down, off3_out * self.down
            return (pred3_out + off3_out) * self.down
