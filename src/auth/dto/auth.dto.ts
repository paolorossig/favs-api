import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 6, maxLength: 12 })
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}
