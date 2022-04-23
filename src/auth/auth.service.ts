import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(userObject: AuthDto) {
    const { password } = userObject;
    const hashPassword = await hash(password, 10);
    userObject = { ...userObject, password: hashPassword };
    return this.usersService.create(userObject);
  }

  async login(userObject: AuthDto) {
    const { email, password } = userObject;
    const userFinded = await this.usersService.findByQuery({ email });
    if (!userFinded) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, userFinded.password);
    if (!checkPassword) throw new HttpException('INVALID_PASSWORD', 403);

    const payload = { id: userFinded._id, email: userFinded.email };
    const token = this.jwtService.sign(payload);

    return { user: userFinded, token };
  }
}
