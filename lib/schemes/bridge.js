"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapsSchema = exports.bridgeSwapEventSchema = exports.bridgeSwapEventSymbolSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const common_1 = require("./common");
exports.bridgeSwapEventSymbolSchema = joi_1.default.string().example('WQT').valid('WQT', 'USDT', 'BNB', 'ETH').example('BridgeSwapEventSymbol');
exports.bridgeSwapEventSchema = joi_1.default.object({
    canRedeemed: joi_1.default.boolean().label('BridgeSwapEventCanRedeemed'),
    blockNumber: common_1.blockNumberSchema,
    transactionHash: common_1.transactionHashSchema,
    nonce: joi_1.default.number().label('BridgeSwapEventNonce'),
    timestamp: common_1.timestampSchema,
    initiator: common_1.accountAddressSchema,
    recipient: common_1.accountAddressSchema,
    amount: common_1.coinAmountSchema,
    chainTo: joi_1.default.number().label('BridgeSwapEventChainTo'),
    chainFrom: joi_1.default.number().label('BridgeSwapEventChainFrom'),
    symbol: exports.bridgeSwapEventSymbolSchema,
    signData: joi_1.default.array().items(joi_1.default.string()).label('BridgeSwapEventSignData'),
}).label('BridgeSwapEvent');
exports.swapsSchema = joi_1.default.array().items(exports.bridgeSwapEventSchema).label('Swaps');
