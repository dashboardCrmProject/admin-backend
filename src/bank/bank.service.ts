import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bank } from './entities/bank.entity';

@Injectable()
export class BankService {
  constructor(@InjectModel('Bank') private bankModel: Model<Bank>) {}

  async create(bank: Bank): Promise<Bank> {
    const createdApplication = new this.bankModel(bank);
    return createdApplication.save();
  }

  async findAll(): Promise<Bank[]> {
    return this.bankModel.find().exec();
  }

  async findOne(id: string): Promise<Bank> {
    return this.bankModel.findById(id).exec();
  }

  async update(id: string, bank: Bank): Promise<Bank> {
    return this.bankModel.findByIdAndUpdate(id, bank, { new: true }).exec();
  }

  async delete(id: string): Promise<Bank> {
    return this.bankModel.findByIdAndRemove(id).exec();
  }
}