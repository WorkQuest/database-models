import * as Joi from "joi";

export const walletAddressSchema = Joi.string().label('WalletAddress').regex(/^0x[a-fA-F0-9]{40}$/).example('0x3e356dBeF7F3098407667a0f2aE6bC4ac9B69E0a');
export const walletPublicKeySchema = Joi.string().label('WalletPublicKey').example('0x02bc1063dabeaa5de5067e87b97e089567da9efb672c979d6097ca276ec9cd35e1');
export const walletBech32AddressSchema = Joi.string().label('WalletBech32Address').example('eth18c6km0hh7vycgpmx0g8j4e4uftymd8s2ypanvc')

export const walletAddressesSchema = Joi.object({
  address: walletAddressSchema,
  bech32Address: walletBech32AddressSchema
}).label('WalletAddresses');
