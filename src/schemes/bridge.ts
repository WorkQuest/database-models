import Joi from "joi";
import {
  timestampSchema,
  coinAmountSchema,
  blockNumberSchema,
  accountAddressSchema,
  transactionHashSchema,
} from "./common";

export const bridgeSwapEventSymbolSchema = Joi.string().example('WQT').valid('WQT', 'USDT', 'BNB', 'ETH').example('BridgeSwapEventSymbol');

export const bridgeSwapEventSchema = Joi.object({
  canRedeemed: Joi.boolean().label('BridgeSwapEventCanRedeemed'),
  blockNumber: blockNumberSchema,
  transactionHash: transactionHashSchema,
  nonce: Joi.number().label('BridgeSwapEventNonce'),
  timestamp: timestampSchema,
  initiator: accountAddressSchema,
  recipient: accountAddressSchema,
  amount: coinAmountSchema,
  chainTo: Joi.number().label('BridgeSwapEventChainTo'),
  chainFrom: Joi.number().label('BridgeSwapEventChainFrom'),
  symbol: bridgeSwapEventSymbolSchema,
  signData: Joi.array().items(Joi.string()).label('BridgeSwapEventSignData'),
}).label('BridgeSwapEvent');

export const bridgeSwapEventsSchema = Joi.array().items(bridgeSwapEventSchema).label('BridgeSwapEvents');
