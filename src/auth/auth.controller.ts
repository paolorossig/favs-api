import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() userObject: AuthDto) {
    return this.authService.signup(userObject);
  }

  @Post('login')
  login(@Body() userObject: AuthDto) {
    return this.authService.login(userObject);
  }
}
