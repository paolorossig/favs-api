import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/schema/user.schema';

export class PartialCreateFavDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreateFavDto extends PartialCreateFavDto {
  @IsMongoId()
  @IsNotEmpty()
  user: User;
}
