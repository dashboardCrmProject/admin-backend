import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(@InjectModel('Payment') private applicationModel: Model<Payment>) {}

  async create(application: Payment): Promise<Payment> {
    const createdApplication = new this.applicationModel(application);
    return createdApplication.save();
  }

  async search(application: Payment): Promise<Payment[]> {
    // @ts-ignore
    const { branch, teamMember, paymentFor, month, year } = application;
    return this.applicationModel.find({
      $and: [
        { branch },
        { teamMember },
        { paymentFor },
        { month },
        { year },
      ],
    }).exec();
  }

  async findAll(): Promise<Payment[]> {
    return this.applicationModel.find().exec();
  }

  async findOne(id: string): Promise<Payment> {
    return this.applicationModel.findById(id).exec();
  }

  async update(id: string, application: Payment): Promise<Payment> {
    return this.applicationModel.findByIdAndUpdate(id, application, { new: true }).exec();
  }

  async delete(id: string): Promise<Payment> {
    return this.applicationModel.findByIdAndRemove(id).exec();
  }
}