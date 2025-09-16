import bcrypt from "bcryptjs";

async function generateHash(text: string): Promise<string> {
  const hash = await bcrypt.hash(text, 16);
  return hash;
}

async function verifyHash(text: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(text, hash);
}

export { generateHash, verifyHash };
