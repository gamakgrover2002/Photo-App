import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  IsArray,
  IsString,
} from 'class-validator';

export function DefaultValue(defaultValue: any) {
  return Transform(({ value }) =>
    value === undefined || value === null ? defaultValue : value,
  );
}

export class RegisterDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  email: string;

  @IsStrongPassword({}, { message: 'Password must be strong' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;

  @IsNotEmpty({ message: 'First name cannot be empty' })
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  profileImage?: string;

  @DefaultValue([])
  @IsArray({ message: 'Posts must be an array' })
  posts: string[];
}
