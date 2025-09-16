import z from "zod";

const generatorSchema = z.object({
  text: z.string().min(1, { error: "enter text to hash" }),
});

const verifyHashSchema = z.object({
  text: z.string().min(1, { error: "enter text to verify" }),
  hash: z.string().min(1, { error: "enter hash to verify" }),
});

export { generatorSchema, verifyHashSchema };
