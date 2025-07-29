export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
  password: string;
  createdAt: Date;
}
export type UserType = Partial<User>;
