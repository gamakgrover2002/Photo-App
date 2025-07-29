/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
// import { LoginBody } from '../dto/login.dto';
import { UserService } from '../service/user.service';
import { HashPasswordInterceptor } from 'src/utils/interceptors/password.interceptor';
import { RegisterDto } from '../dto/register.dto';
import { JwtService } from 'src/modules/jwt/service/jwt.service';
import { LoginBody } from '../dto/login.dto';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('/login')
  async login(@Body() body: LoginBody): Promise<unknown> {
    const { email, password } = body;

    return await this.userService.validateUser(email, password);
  }
  @Get('/user')
  async getUser(@Body('id') id) {
    try {
      const user = await this.userService.getUser(id as string);
      return {
        status: 200,
        data: user,
      };
    } catch (err) {
      return {
        status: 500,
        message: err.message,
      };
    }
  }
  @Post('/register')
  @UseInterceptors(HashPasswordInterceptor)
  async register(@Body() registerBody: RegisterDto) {
    try {
      const user = await this.userService.createUser(registerBody);
      console.log(user);
      if (user) {
        const token = await this.jwtService.generateToken<{
          id: string | undefined;
        }>({
          id: user?.id,
        });
        return {
          token: token,
          status: 200,
          message: 'User Registered Successfully',
        };
      }
    } catch (err) {
      return {
        status: 500,
        message: err?.message,
      };
    }
  }
}
