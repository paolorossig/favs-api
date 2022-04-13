import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavsModule } from './favs/favs.module';

@Module({
  imports: [FavsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
