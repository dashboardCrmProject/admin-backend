import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(@InjectModel('Customer') private customerModel: Model<Customer>) {}

  async create(customer: Customer): Promise<Customer> {
    const createdCustomer = new this.customerModel(customer);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }

  async update(id: string, customer: Customer): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(id, customer, { new: true }).exec();
  }

  async delete(id: string): Promise<Customer> {
    return this.customerModel.findByIdAndRemove(id).exec();
  }
}