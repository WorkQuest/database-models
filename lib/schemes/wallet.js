"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
exports.walletAddressSchema = Joi.string().label('WalletAddress').regex(/^0x[a-fA-F0-9]{40}$/).example('0x3e356dBeF7F3098407667a0f2aE6bC4ac9B69E0a');
exports.walletPublicKeySchema = Joi.string().label('WalletPublicKey').example('0x02bc1063dabeaa5de5067e87b97e089567da9efb672c979d6097ca276ec9cd35e1');
exports.walletBech32AddressSchema = Joi.string().label('WalletBech32Address').example('eth18c6km0hh7vycgpmx0g8j4e4uftymd8s2ypanvc');
exports.walletSignatureSchema = Joi.string().label('WalletSignature').example('0x19b1830db24196fc898176efc3b6b4c3186b1987cf6b7ff72bf598d9785c35503db7b78832c5fa13c4983a36537aba1f1ddc047b142dde628ee8070f4d643dbv4c');
exports.walletAddressesSchema = Joi.object({
    address: exports.walletAddressSchema,
    bech32Address: exports.walletBech32AddressSchema,
}).label('WalletAddresses');
