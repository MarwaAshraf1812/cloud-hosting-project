export interface CreateArticle
{
  title: string;
  description: string;
}

export interface UpdateArticle
{
  title?: string;
  description?: string;
}

export interface CreateComment
{
  body: string;
}

export interface UpdateComment
{
  body?: string;
}

export interface RegisterUser
{
  username: string;
  email: string;
  password: string;
}

export interface LoginUser
{
  email: string;
  password: string;
}