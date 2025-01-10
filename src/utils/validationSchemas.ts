import { z } from "zod";

export const ArticleSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be at most 100 characters long"),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description must be at most 1000 characters long"),
});

export const RegisterUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 20 characters long"),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .max(200, "Email must be at most 100 characters long")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters long"),
});

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
})

export const UpdateUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 20 characters long")
    .optional(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .max(200, "Email must be at most 100 characters long")
    .email("Email is invalid")
    .optional(),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters long")
    .optional(),
})

export const CreateCommentSchema = z.object({
  content: z
    .string({
      required_error: "Text is required",
      invalid_type_error: "Text must be a string",
    })
    .min(3, "Text must be at least 3 characters long")
    .max(1000, "Text must be at most 1000 characters long"),
  articleId: z
    .number({
      required_error: "Article ID is required",
      invalid_type_error: "Article ID must be a number",
    })
    .int(),
})