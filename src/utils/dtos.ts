export interface CreateArticle {
  title: string;
  description: string;
}

export interface UpdateArticle {
  title?: string;
  description?: string;
}

export interface CreateComment {
  body: string;
}

export interface UpdateComment {
  body?: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface UpdateUser {
  username?: string;
  email?: string;
  password?: string;
}

export interface CreateComment {
  content: string;
  articleId: number;
}

export interface UpdateComment {
  content: string;
}
