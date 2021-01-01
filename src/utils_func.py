import torch
import losswise

class ModularizedFunction(torch.nn.Module):
    """
    A Module which calls the specified function in place of the forward pass.
    Useful when your existing loss is functional and you need it to be a Module.
    """
    def __init__(self, forward_op):
        super().__init__()
        self.forward_op = forward_op

    def forward(self, *args, **kwargs):
        return self.forward_op(*args, **kwargs)


class CriterionParallel(torch.nn.Module):
    def __init__(self, criterion):
        super().__init__()
        if not isinstance(criterion, torch.nn.Module):
            criterion = ModularizedFunction(criterion)
        self.criterion = torch.nn.DataParallel(criterion)

    def forward(self, *args, **kwargs):
        """
        Note the .mean() here, which is required since DataParallel 
        gathers any scalar outputs of forward() into a vector with 
        one item per GPU (See DataParallel docs).
        """
        return self.criterion(*args, **kwargs).mean()
        
class AverageMeter(object):
    """Computes and stores the average and current value"""

    def __init__(self):
        self.reset()

    def reset(self):
        self.val = 0
        self.avg = 0
        self.sum = 0
        self.count = 0

    def update(self, val, n=1):
        self.val = val
        self.sum += val * n
        self.count += n
        self.avg = self.sum / self.count


class Metric(object):
    def __init__(self):
        self.EPE = AverageMeter()
        self.RMSELIs = AverageMeter()
        self.RMSELGs = AverageMeter()
        self.ABSRs = AverageMeter()
        self.SQRs = AverageMeter()
        self.DELTA = AverageMeter()
        self.DELTASQ = AverageMeter()
        self.DELTACU = AverageMeter()
        self.losses = AverageMeter()

    def update(self, loss, EPE, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu):
        if loss:
            self.losses.update(loss)
        self.EPE.update(EPE)
        self.RMSELIs.update(RMSE_Linear)
        self.RMSELGs.update(RMSE_Log)
        self.ABSRs.update(abs_relative)
        self.SQRs.update(sq_relative)
        self.DELTA.update(delta)
        self.DELTASQ.update(delta_sq)
        self.DELTACU.update(delta_cu)

    def get_info(self):
        return [self.losses.avg, self.EPE.avg, self.RMSELIs.avg, self.RMSELGs.avg, self.ABSRs.avg, self.SQRs.avg, self.DELTA.avg,
                self.DELTASQ.avg, self.DELTACU.avg]

    def calculate(self, depth, predict, loss=None):
        # only consider 1~80 meters
        mask = (depth >= 1) * (depth <= 80)
        EPE = torch.abs(predict[mask] - depth[mask]).float().mean().cpu().data
        RMSE_Linear = ((((predict[mask] - depth[mask]) ** 2).mean()) ** 0.5).cpu().data
        RMSE_Log = ((((torch.log(predict[mask]) - torch.log(depth[mask])) ** 2).mean()) ** 0.5).cpu().data
        abs_relative = (torch.abs(predict[mask] - depth[mask]) / depth[mask]).mean().cpu().data
        sq_relative = ((predict[mask] - depth[mask]) ** 2 / depth[mask]).mean().cpu().data
        delta = (torch.max(predict[mask] / depth[mask], depth[mask] / predict[mask]) < 1.25).float().mean().cpu().data
        delta_sq = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 2).float().mean().cpu().data
        delta_cu = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 3).float().mean().cpu().data
        self.update(loss, EPE, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu)

    def tensorboard(self, writer, epoch, token='train'):
        writer.add_scalar(token + '/EPEs', self.EPE.avg, epoch)
        writer.add_scalar(token + '/RMSELIs', self.RMSELIs.avg, epoch)
        writer.add_scalar(token + '/RMSELGs', self.RMSELGs.avg, epoch)
        writer.add_scalar(token + '/ABSRs', self.ABSRs.avg, epoch)
        writer.add_scalar(token + '/SQRs', self.SQRs.avg, epoch)
        writer.add_scalar(token + '/DELTA', self.DELTA.avg, epoch)
        writer.add_scalar(token + '/DELTASQ', self.DELTASQ.avg, epoch)
        writer.add_scalar(token + '/DELTACU', self.DELTACU.avg, epoch)

    def print(self, iter, token):
        string = '{}:{}\tL {:.3f} EPE {:.3f} RLI {:.3f} RLO {:.3f} ABS {:.3f} SQ {:.3f} DEL {:.3f} DELQ {:.3f} DELC {:.3f}'.format(token, iter, *self.get_info())
        return string



class LossWise(object):
    def __init__(self, key=None, tag=None, epochs=300):
        self.key = key
        print(self.key)
        if len(self.key)>0:
            losswise.set_api_key(self.key)
            session = losswise.Session(tag=tag, max_iter=epochs)
            self.error = session.graph('Error', kind='min', display_interval=1)
            self.loss = session.graph('Loss', kind='min', display_interval=1)
            self.delta = session.graph('Delta', kind='min', display_interval=1)
            self.session=session

    def update(self, info, epoch, tag='Train'):
        if len(self.key)>0:
            self.loss.append(epoch, {tag+'/loss':info[0]})
            self.error.append(epoch, {tag+'/EPE':info[1],
                                      tag+'/RMSE':info[2], tag+'/RMSELog':info[3],
                                      tag+'/ABSR':info[4], tag+'/SQUR':info[5]})
            self.delta.append(epoch, {tag+'/1.25':info[6],tag+'/1.25^2':info[7],
                                      tag+'/1.25^3':info[8]})

    def done(self):
        self.session.done()

class LossWise1(object):
    def __init__(self, key=None, tag=None, epochs=300):
        self.key = key
        print(self.key)
        if len(self.key)>0:
            losswise.set_api_key(self.key)
            session = losswise.Session(tag=tag, max_iter=epochs)
            self.error = session.graph('Error', kind='min', display_interval=1)
            self.loss_total = session.graph('Loss', kind='min', display_interval=1)
            self.delta = session.graph('Delta', kind='min', display_interval=1)
            self.session=session

    def update(self, info, epoch, tag='Train'):
        if len(self.key)>0:
            self.loss_total.append(epoch, {tag+'/loss_gt':info[0], tag+'/loss_pseudo':info[1], tag+'/loss_total':info[2]})
            self.error.append(epoch, {tag+'/RMSE':info[3], tag+'/RMSELog':info[4],
                                      tag+'/ABSR':info[5], tag+'/SQUR':info[6]})
            self.delta.append(epoch, {tag+'/1.25':info[7],tag+'/1.25^2':info[8],
                                      tag+'/1.25^3':info[9]})

    def done(self):
        self.session.done()

class Metric1(object):
    def __init__(self):
        self.RMSELIs = AverageMeter()
        self.RMSELGs = AverageMeter()
        self.ABSRs = AverageMeter()
        self.SQRs = AverageMeter()
        self.DELTA = AverageMeter()
        self.DELTASQ = AverageMeter()
        self.DELTACU = AverageMeter()
        self.losses_gt = AverageMeter()
        self.losses_pseudo = AverageMeter()
        self.losses_total = AverageMeter()

    def update(self, loss_gt, loss_pseudo, loss_total, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu):
        self.losses_gt.update(loss_gt)
        self.losses_pseudo.update(loss_pseudo)
        self.losses_total.update(loss_total)
        self.RMSELIs.update(RMSE_Linear)
        self.RMSELGs.update(RMSE_Log)
        self.ABSRs.update(abs_relative)
        self.SQRs.update(sq_relative)
        self.DELTA.update(delta)
        self.DELTASQ.update(delta_sq)
        self.DELTACU.update(delta_cu)

    def get_info(self):
        return [self.losses_gt.avg, self.losses_pseudo.avg, self.losses_total.avg, self.RMSELIs.avg, self.RMSELGs.avg, self.ABSRs.avg, self.SQRs.avg, self.DELTA.avg,
                self.DELTASQ.avg, self.DELTACU.avg]

    def calculate(self, depth, predict, loss_gt=0, loss_psuedo=0, loss_total=0):
        # only consider 1~80 meters
        mask = (depth >= 1) * (depth <= 80)
        RMSE_Linear = ((((predict[mask] - depth[mask]) ** 2).mean()) ** 0.5).cpu().data
        RMSE_Log = ((((torch.log(predict[mask]) - torch.log(depth[mask])) ** 2).mean()) ** 0.5).cpu().data
        abs_relative = (torch.abs(predict[mask] - depth[mask]) / depth[mask]).mean().cpu().data
        sq_relative = ((predict[mask] - depth[mask]) ** 2 / depth[mask]).mean().cpu().data
        delta = (torch.max(predict[mask] / depth[mask], depth[mask] / predict[mask]) < 1.25).float().mean().cpu().data
        delta_sq = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 2).float().mean().cpu().data
        delta_cu = (torch.max(predict[mask] / depth[mask],
                              depth[mask] / predict[mask]) < 1.25 ** 3).float().mean().cpu().data
        self.update(loss_gt, loss_psuedo, loss_total, RMSE_Linear, RMSE_Log, abs_relative, sq_relative, delta, delta_sq, delta_cu)

    def tensorboard(self, writer, epoch, token='train'):
        writer.add_scalar(token + '/RMSELIs', self.RMSELIs.avg, epoch)
        writer.add_scalar(token + '/RMSELGs', self.RMSELGs.avg, epoch)
        writer.add_scalar(token + '/ABSRs', self.ABSRs.avg, epoch)
        writer.add_scalar(token + '/SQRs', self.SQRs.avg, epoch)
        writer.add_scalar(token + '/DELTA', self.DELTA.avg, epoch)
        writer.add_scalar(token + '/DELTASQ', self.DELTASQ.avg, epoch)
        writer.add_scalar(token + '/DELTACU', self.DELTACU.avg, epoch)

    def print(self, iter, token):
        string = '{}:{}\tL {:.3f} {:.3f} {:.3f} RLI {:.3f} RLO {:.3f} ABS {:.3f} SQ {:.3f} DEL {:.3f} DELQ {:.3f} DELC {:.3f}'.format(token, iter, *self.get_info())
        return string
