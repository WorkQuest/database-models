import {
    isValidChecksumAddress,
    stripHexPrefix,
    toChecksumAddress
} from 'crypto-addr-codec';
import { bech32 } from 'bech32';

const { encode, decode, toWords, fromWords } = bech32;

function hexEncoder() {
    return (data: Buffer) => toChecksumAddress(data.toString('hex'));
}

function hexDecoder() {
    return (data: string) => {
        const stripped = stripHexPrefix(data);

        if (
            !isValidChecksumAddress(data) &&
            stripped !== stripped.toLowerCase() &&
            stripped !== stripped.toUpperCase()
        ) {
            throw Error('Invalid address checksum');
        }

        return Buffer.from(stripHexPrefix(data), 'hex');
    };
}

function bech32Encoder(prefix: string) {
    return (data: Buffer) => encode(prefix, toWords(data));
}

function bech32Decoder(currPrefix: string) {
    return (data: string) => {
        const { prefix, words } = decode(data);

        if (prefix !== currPrefix) {
            throw Error('Invalid address format');
        }

        return Buffer.from(fromWords(words));
    }
}

function hexConverter() {
    return {
        decoder: hexDecoder(),
        encoder: hexEncoder(),
    }
}

function bech32Converter(prefix: string) {
    return {
        decoder: bech32Decoder(prefix),
        encoder: bech32Encoder(prefix),
    }
}

export function addressConverter(address: string) {
    return {
        toHex: () => hexConverter().encoder(bech32Converter('wq').decoder(address)),
        toBech32: () => bech32Converter('wq').encoder(hexConverter().decoder(address))
    }
}
