"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressConverter = void 0;
const crypto_addr_codec_1 = require("crypto-addr-codec");
const bech32_1 = require("bech32");
const { encode, decode, toWords, fromWords } = bech32_1.bech32;
function hexEncoder() {
    return (data) => (0, crypto_addr_codec_1.toChecksumAddress)(data.toString('hex'));
}
function hexDecoder() {
    return (data) => {
        const stripped = (0, crypto_addr_codec_1.stripHexPrefix)(data);
        if (!(0, crypto_addr_codec_1.isValidChecksumAddress)(data) &&
            stripped !== stripped.toLowerCase() &&
            stripped !== stripped.toUpperCase()) {
            throw Error('Invalid address checksum');
        }
        return Buffer.from((0, crypto_addr_codec_1.stripHexPrefix)(data), 'hex');
    };
}
function bech32Encoder(prefix) {
    return (data) => encode(prefix, toWords(data));
}
function bech32Decoder(currPrefix) {
    return (data) => {
        const { prefix, words } = decode(data);
        if (prefix !== currPrefix) {
            throw Error('Invalid address format');
        }
        return Buffer.from(fromWords(words));
    };
}
function hexConverter() {
    return {
        decoder: hexDecoder(),
        encoder: hexEncoder(),
    };
}
function bech32Converter(prefix) {
    return {
        decoder: bech32Decoder(prefix),
        encoder: bech32Encoder(prefix),
    };
}
function addressConverter(address) {
    return {
        toHex: () => hexConverter().encoder(bech32Converter('wq').decoder(address)),
        toBech32: () => bech32Converter('wq').encoder(hexConverter().decoder(address))
    };
}
exports.addressConverter = addressConverter;
