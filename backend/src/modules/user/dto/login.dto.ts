import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginBody {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
