import { z } from "zod";

export const ArticleSchema = z.object({
  title: z.string(),
  description: z.string()
});
