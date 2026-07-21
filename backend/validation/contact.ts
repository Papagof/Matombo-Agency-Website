import { z } from "zod";

import { industryOptions, budgetOptions } from "@/frontend/content";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  business: z.string().min(2),
  industry: z.enum(industryOptions),
  budget: z.enum(budgetOptions),
  message: z.string().min(10),
});

export type ContactInput = z.infer<typeof contactSchema>;
