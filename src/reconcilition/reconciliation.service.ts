import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reconciliation } from './entities/reconciliation.entity';

@Injectable()
export class ReconciliationService {
  constructor(@InjectModel('Reconciliation') private applicationModel: Model<Reconciliation>) {}

  async create(application: Reconciliation): Promise<Reconciliation> {
    const createdApplication = new this.applicationModel(application);
    return createdApplication.save();
  }

  async search(application: Reconciliation): Promise<Reconciliation[]> {
    // @ts-ignore
    const { branch, teamMember, productCategory, bank, month, year } = application;
    return this.applicationModel.find({
      $and: [
        { branch },
        { teamMember },
        { productCategory },
        { bank },
        { month },
        { year },
      ],
    }).exec();
  }

  async findAll(): Promise<Reconciliation[]> {
    return this.applicationModel.find().exec();
  }

  async findOne(id: string): Promise<Reconciliation> {
    return this.applicationModel.findById(id).exec();
  }

  async update(id: string, application: Reconciliation): Promise<Reconciliation> {
    return this.applicationModel.findByIdAndUpdate(id, application, { new: true }).exec();
  }

  async delete(id: string): Promise<Reconciliation> {
    return this.applicationModel.findByIdAndRemove(id).exec();
  }
}