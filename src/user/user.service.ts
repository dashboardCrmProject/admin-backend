import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const createdApplication = new this.userModel(user);
    return createdApplication.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async login(body: any): Promise<any> {
    const email = body.email
    const user = await this.userModel.findOne({ email }).exec();
    if(user){
      if((user['email'] == body?.email) && (user['password'] == body?.password)){
        return {id: user?._id, auth: true}
      }else{
        return {message: "invalid username or password", auth: false}
      }
    }else{
      const message = {message: "user not registered", auth: false}
      return message
    }
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}