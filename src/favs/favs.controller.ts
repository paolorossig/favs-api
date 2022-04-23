import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { PartialCreateFavDto } from './dto/create-fav.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateFavDto } from './dto/update-fav.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('favs')
@UseGuards(JwtAuthGuard)
@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Post()
  async create(@Request() req, @Body() createFavDto: PartialCreateFavDto) {
    return this.favsService.create({ ...createFavDto, user: req.user.userId });
  }

  @Get()
  async findAll(@Request() req) {
    return this.favsService.findAllByQuery({ user: req.user.userId });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.favsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFavDto: UpdateFavDto) {
    return this.favsService.updateListOfFavs(id, updateFavDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.favsService.remove(id);
  }
}
