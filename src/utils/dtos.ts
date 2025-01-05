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