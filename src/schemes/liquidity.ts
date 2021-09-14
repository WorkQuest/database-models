import * as Joi from "joi";

export const addressContractSchema = Joi.string().example('0xe7489ba661e0487669a685d76f4ee978e931dec9');
export const amountContractSchema = Joi.number().min(0).example(19494.677122626837340762);
export const pairTokenInfoContractSchema = Joi.string().example('WQT')
export const timestampContractSchema = Joi.date().timestamp('unix').example(1631568392)

export const pairContractSchema = Joi.object({
    token0: pairTokenInfoContractSchema,
    token1: pairTokenInfoContractSchema,
})

export const liquiditySwapSchema = Joi.object({
    amount0In: amountContractSchema,
    amount0Out: amountContractSchema,
    amount1In: amountContractSchema,
    amount1Out: amountContractSchema,
    amountUSD: amountContractSchema,
    pair: pairContractSchema,
    timestamp: timestampContractSchema,
    to: addressContractSchema,
}).label('LiquiditySwapSchema')

export const swapWQTSchema = Joi.array().items(liquiditySwapSchema).label('SwapWQTSchema');
