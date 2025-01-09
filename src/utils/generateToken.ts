import Jwt from "jsonwebtoken";
import { JWTPayload } from "./types";
import { serialize } from "cookie";


/**
 * Generates a JWT token
 * @param payload - The payload to be included in the token
 * @returns The generated token
 */

export function generateToken(payload: JWTPayload): string {
  const privateKey = process.env.JWT_SECRET as string;
  return Jwt.sign(payload, privateKey, { expiresIn: "2h" });
}


export function setCookie(JWTPayload: JWTPayload): string {
  const token = generateToken(JWTPayload);

  const cookie = serialize("token", token, {
        httpOnly: true, // Cookie is not accessible via client-side JavaScript
        secure: process.env.NODE_ENV === "production", // Cookie is only set on HTTPS
        sameSite: "strict", // Cookie is not sent on cross-origin requests
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
  return cookie;
}
