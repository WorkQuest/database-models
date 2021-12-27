import * as Joi from "joi";

export const walletAddressSchema = Joi.string().hex()
