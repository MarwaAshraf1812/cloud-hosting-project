import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { JWTPayload } from "./types";


export function verifyToken(request: NextRequest): JWTPayload | null {
  try {
    const token = request.cookies.get("token")?.value as string;
    if (!token) return null;

    const privateKey = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, privateKey) as JWTPayload;

    return decoded;
  } catch {
    return null;
  }
}