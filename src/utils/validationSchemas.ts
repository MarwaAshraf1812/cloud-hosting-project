import { z } from "zod";

export const ArticleSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string()
});
