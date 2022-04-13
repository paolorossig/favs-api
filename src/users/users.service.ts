import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Users, UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModule: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModule.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersModule.find({}).lean();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersModule.findById(id);
    return user;
  }

  async remove(id: string) {
    const userDeleted = await this.usersModule.findByIdAndDelete(id);
    return userDeleted;
  }
}
