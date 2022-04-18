import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';
import { Favs, FavsDocument } from './schema/favs.schema';

@Injectable()
export class FavsService {
  constructor(@InjectModel(Favs.name) private favsModel: Model<FavsDocument>) {}

  async create(createFavDto: CreateFavDto) {
    const fav = await this.favsModel.create(createFavDto);
    return fav;
  }

  async findAllByQuery(query: any = {}) {
    const favs = await this.favsModel.find(query).lean();
    return favs;
  }

  async findOne(id: string) {
    const fav = await this.favsModel.findById(id);
    return fav;
  }

  async updateListOfFavs(id: string, updateFavDto: UpdateFavDto) {
    const fav = await this.favsModel.findByIdAndUpdate(
      id,
      {
        $push: { list: updateFavDto },
      },
      { new: true },
    );
    return fav;
  }

  async remove(id: string) {
    const favDeleted = await this.favsModel.findByIdAndDelete(id);
    return favDeleted;
  }
}
