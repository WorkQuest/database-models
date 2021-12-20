import * as speakeasy from "speakeasy";
import {v4 as uuidv4} from "uuid";
import uuidInt = require("uuid-int")

export function getUUID(): string {
  return uuidv4();
}

export function getUUIDInt(): number {
  return uuidInt(0).uuid()
}

export function totpValidate(totp: string, secret: string): boolean{
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: Number(totp)
  });
}
