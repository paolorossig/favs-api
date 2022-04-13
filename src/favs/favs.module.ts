import { Module } from '@nestjs/common';
import { FavsService } from './favs.service';
import { FavsController } from './favs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Favs, FavsSchema } from './schema/favs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Favs.name, schema: FavsSchema }]),
  ],
  controllers: [FavsController],
  providers: [FavsService],
})
export class FavsModule {}
