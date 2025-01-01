export interface CreateArticle
{
  title: string;
  body: string;
}

export interface UpdateArticle
{
  title?: string;
  body?: string;
}