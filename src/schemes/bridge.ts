import Joi from "joi";

export const bridgeSymbolSchema = Joi.string().example('WQT').valid('WQT', 'USDT', 'BNB', 'ETH').example('BridgeSymbol');

export const swapSchema = Joi.object({
  canRedeemed: Joi.boolean().label('CanRedeemed'),
  blockNumber: Joi.number().label('BlockNumber'),
  transactionHash: Joi.string().label('TransactionHash'),
  nonce: Joi.number().label('Nonce'),
  timestamp: Joi.string().label('Timestamp'),
  initiator: Joi.string().label('Initiator'),
  recipient: Joi.string().label('Recipient'),
  amount: Joi.string().label('Amount'),
  chainTo: Joi.number().label('ChainTo'),
  chainFrom: Joi.number().label('ChainFrom'),
  symbol: bridgeSymbolSchema,
  signData: Joi.array().items(Joi.string()).label('SignData'),
}).label('Swap');

export const swapsSchema = Joi.array().items(swapSchema).label('Swaps');
