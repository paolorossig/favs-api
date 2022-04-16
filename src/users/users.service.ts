import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Users, UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModel.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersModel.find({}).lean();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersModel.findById(id);
    return user;
  }

  async findByQuery(query: any) {
    const user = await this.usersModel.findOne(query);
    return user;
  }

  async remove(id: string) {
    const userDeleted = await this.usersModel.findByIdAndDelete(id);
    return userDeleted;
  }
}
