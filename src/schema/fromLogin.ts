import { z } from "zod";

export const FromLoginSchema = z.object({
    username: z.string().optional(),
    password: z.string().optional(),
});

export type FromLoginType = z.infer<typeof FromLoginSchema>