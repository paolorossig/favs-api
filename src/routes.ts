import { Routes } from '@nestjs/core';
import { FavsModule } from './favs/favs.module';
import { UsersModule } from './users/users.module';

export const routes: Routes = [
  {
    path: 'api',
    children: [
      { path: 'users', module: UsersModule },
      { path: 'favs', module: FavsModule },
    ],
  },
];
