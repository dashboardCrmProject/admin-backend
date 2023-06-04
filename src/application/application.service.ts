import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationService {
  constructor(@InjectModel('Application') private applicationModel: Model<Application>) {}

  async create(application: Application): Promise<Application> {
    const createdApplication = new this.applicationModel(application);
    return createdApplication.save();
  }

  async findAll(): Promise<Application[]> {
    return this.applicationModel.find().exec();
  }

  async findOne(id: string): Promise<Application> {
    return this.applicationModel.findById(id).exec();
  }

  async update(id: string, application: Application): Promise<Application> {
    return this.applicationModel.findByIdAndUpdate(id, application, { new: true }).exec();
  }

  async delete(id: string): Promise<Application> {
    return this.applicationModel.findByIdAndRemove(id).exec();
  }
}