import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateFavDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  link: string;
}
