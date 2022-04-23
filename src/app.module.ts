import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FavsModule } from './favs/favs.module';
import { AuthModule } from './auth/auth.module';
import { routes } from './routes';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    RouterModule.register(routes),
    UsersModule,
    FavsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
