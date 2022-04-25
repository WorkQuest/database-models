"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapSchema = exports.bridgeSymbolSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.bridgeSymbolSchema = joi_1.default.string().example('WQT').valid('WQT', 'USDT', 'BNB', 'ETH').example('BridgeSymbol');
exports.swapSchema = joi_1.default.object({
    canRedeemed: joi_1.default.boolean().label('CanRedeemed'),
    blockNumber: joi_1.default.number().label('BlockNumber'),
    transactionHash: joi_1.default.string().label('TransactionHash'),
    nonce: joi_1.default.number().label('Nonce'),
    timestamp: joi_1.default.string().label('Timestamp'),
    initiator: joi_1.default.string().label('Initiator'),
    recipient: joi_1.default.string().label('Recipient'),
    amount: joi_1.default.string().label('Amount'),
    chainTo: joi_1.default.number().label('ChainTo'),
    chainFrom: joi_1.default.number().label('ChainFrom'),
    symbol: exports.bridgeSymbolSchema,
    signData: joi_1.default.array().items(joi_1.default.string()).label('SignData'),
}).label('Swap');
const swapsSchema = joi_1.default.array().items(exports.swapSchema).label('Swaps');
