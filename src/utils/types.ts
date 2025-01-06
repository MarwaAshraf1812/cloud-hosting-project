export type Article = {
  id: number;
  title: string;
  description: string;
};

export interface JWTPayload {
  id: number;
  isAdmin: boolean;
  username: string;
}