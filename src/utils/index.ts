import * as speakeasy from "speakeasy";
import { v4 as uuidv4 } from "uuid";
const UUID = require('uuid-int');

export function getUUID(): string {
  return uuidv4();
}

export function getUUIDInt(): string {
  const uuid = UUID(0).uuid();
  return uuid();
}

export function totpValidate(totp: string, secret: string): boolean{
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: Number(totp)
  });
}
