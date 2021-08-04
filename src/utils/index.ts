import * as speakeasy from "speakeasy";
import { v4 as uuidv4 } from "uuid";
import { Boom } from "@hapi/boom";

export function getUUID(): string {
  return uuidv4();
}

export function error(code: number, msg: string, data: object): Boom {
  return new Boom(msg, {
    data: {
      code,
      data,
      api: true
    },
    statusCode: Math.floor(code / 1000)
  });
}

export function totpValidate(totp: string, secret: string): boolean{
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: Number(totp)
  });
}

export * from "./quest";
