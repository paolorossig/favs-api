import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { CreateFavDto } from './dto/create-fav.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Post()
  create(@Body() createFavDto: CreateFavDto) {
    return this.favsService.create(createFavDto);
  }

  @Get()
  findAll() {
    return this.favsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favsService.remove(id);
  }
}
