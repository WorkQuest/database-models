import { Boom } from "@hapi/boom";
export declare function getUUID(): string;
export declare function error(code: number, msg: string, data: object): Boom;
export declare function totpValidate(totp: string, secret: string): boolean;
export * from "./quest";
