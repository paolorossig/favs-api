import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFavDto } from './dto/create-fav.dto';
import { Favs, FavsDocument } from './schema/favs.schema';

@Injectable()
export class FavsService {
  constructor(
    @InjectModel(Favs.name) private favsModule: Model<FavsDocument>,
  ) {}

  async create(createFavDto: CreateFavDto) {
    const fav = await this.favsModule.create(createFavDto);
    return fav;
  }

  async findAll() {
    const favs = await this.favsModule.find({}).lean();
    return favs;
  }

  async findOne(id: string) {
    const fav = await this.favsModule.findById(id);
    return fav;
  }

  async remove(id: string) {
    const favDeleted = await this.favsModule.findByIdAndDelete(id);
    return favDeleted;
  }
}
