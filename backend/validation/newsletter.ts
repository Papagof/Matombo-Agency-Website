import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
