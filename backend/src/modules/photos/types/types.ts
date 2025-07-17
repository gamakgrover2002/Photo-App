export interface Photos {
  id?: string;
  url?: string;
  alt?: string;
  number_liked?: number;
  user?: User;
}
export interface User {
  id: string;
  name: string | null;
}
