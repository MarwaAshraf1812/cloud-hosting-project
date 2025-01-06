import Jwt from "jsonwebtoken";
import { JWTPayload } from "./types";


/**
 * Generates a JWT token
 * @param payload - The payload to be included in the token
 * @returns The generated token
 */

export function generateToken(payload: JWTPayload): string {
  const privateKey = process.env.JWT_SECRET as string;
  return Jwt.sign(payload, privateKey, { expiresIn: "2h" });
}
