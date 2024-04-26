import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS || "10")
  );
  return hashedPassword;
};
