import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;
