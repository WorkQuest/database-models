import * as Joi from "joi";
export declare const proposalTitleSchema: Joi.StringSchema;
export declare const proposalDescriptionSchema: Joi.StringSchema;
export declare const proposalStatusSchema: Joi.NumberSchema;
export declare const proposalNonceIdSchema: Joi.StringSchema;
export declare const proposalVoteCastVotesSchema: Joi.StringSchema;
export declare const proposalVoteCastSupportSchema: Joi.BooleanSchema;
export declare const proposalCreatedEvenVotingPeriodSchema: Joi.NumberSchema;
export declare const proposalCreatedEvenMinimumQuorumSchema: Joi.NumberSchema;
export declare const proposalStatusesSchema: Joi.ArraySchema;
export declare const proposalSchema: Joi.ObjectSchema<any>;
export declare const proposalVoteCastEventSchema: Joi.ObjectSchema<any>;
export declare const proposalCreatedEventSchema: Joi.ObjectSchema<any>;
export declare const proposalSortSchema: Joi.ObjectSchema<any>;
export declare const proposalQuerySchema: Joi.ObjectSchema<any>;
export declare const proposalVoteCastEventSortSchema: Joi.ObjectSchema<any>;
export declare const proposalVoteCastEventQuerySchema: Joi.ObjectSchema<any>;
export declare const proposalDelegatorSchema: Joi.ObjectSchema<any>;
export declare const proposalDelegateChangedEventSchema: Joi.ObjectSchema<any>;
export declare const proposalDelegateVotesChangedEventSchema: Joi.ObjectSchema<any>;
