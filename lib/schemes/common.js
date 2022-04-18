"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workPlacesSchema = exports.workPlaceSchema = exports.prioritiesSchema = exports.prioritySchema = exports.sessionPlaceSchema = exports.searchByNorthAndSouthCoordinatesSchema = exports.locationFullSchema = exports.phoneSchema = exports.jwtTokens = exports.emptyOkSchema = exports.locationSchema = exports.outputPaginationSchema = exports.paginationFields = exports.outputOkSchema = exports.inputFromLoginSchema = exports.HTTPVerbSchema = exports.accountAddressesSchema = exports.accountAddressSchema = exports.coinAmountSchema = exports.locationPlaceNameSchema = exports.blockNumberSchema = exports.transactionHashSchema = exports.timestampSchema = exports.idsSchema = exports.numericIdSchema = exports.mobilePhoneWithoutCountryCodeSchema = exports.mobilePhoneFullSchema = exports.likeSchema = exports.starSchema = exports.searchSchema = exports.limitSchema = exports.offsetSchema = exports.countSchema = exports.latitudeSchema = exports.longitudeSchema = exports.timeInSecondSchema = exports.isoDateSchema = exports.sortDirectionSchema = exports.jwtTokenRefresh = exports.jwtTokenAccess = exports.totpSchema = exports.longHexTokenSchema = exports.hexTokenSchema = exports.urlSchema = exports.idSchema = void 0;
const Joi = __importStar(require("joi"));
const models_1 = require("../models");
exports.idSchema = Joi.string().uuid().example("fa0e2e4e-c53f-4af7-8906-1649daa0cce3").label("Id");
exports.urlSchema = Joi.string().example("http://example.com/v1/getVideo").label("URL");
exports.hexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{6}$/).example("999763").label("HexToken");
exports.longHexTokenSchema = Joi.string().regex(/^[0-9a-fA-F]{40}$/).example("999763").label("HexToken");
exports.totpSchema = Joi.string().regex(/^\d{6}$/).example("123456").label("Totp");
exports.jwtTokenAccess = Joi.string().example("access jwt token").label('JwtTokenAccess');
exports.jwtTokenRefresh = Joi.string().example("refresh jwt token").label('JwtTokenRefresh');
exports.sortDirectionSchema = Joi.string().valid("ASC", "DESC", "asc", "desc").label('SortDirection');
exports.isoDateSchema = Joi.string().isoDate().example("2021-05-12T05:24:47.322Z").label('IsoDate');
exports.timeInSecondSchema = Joi.number().example(56443).label('TimeInSecond');
exports.longitudeSchema = Joi.number().min(-180).max(180).example(84.948846).label("Longitude");
exports.latitudeSchema = Joi.number().min(-90).max(90).example(56.48122).label("Latitude");
exports.countSchema = Joi.number().example(10).label('Count');
exports.offsetSchema = Joi.number().min(0).default(0).label("Offset");
exports.limitSchema = Joi.number().min(0).default(10).max(100).label('Limit');
exports.searchSchema = Joi.string().default(null).max(255).label('Search');
exports.starSchema = Joi.object().allow(null).label('Star');
exports.likeSchema = Joi.object().allow(null).label('Like');
exports.mobilePhoneFullSchema = Joi.string().pattern(/^\+\d{1,4}\d{10}$/).example('+79998887766').label('MobilePhoneFull');
exports.mobilePhoneWithoutCountryCodeSchema = Joi.string().example('9998887766').label('MobilePhoneWithoutCountryCode');
exports.numericIdSchema = Joi.number().example(3).label("NumericId");
exports.idsSchema = Joi.array().items(exports.idSchema).label('Ids');
exports.timestampSchema = Joi.date().timestamp('unix').example(1631568392).label('timeStamp');
exports.transactionHashSchema = Joi.string().example('18vk40cc3er48fzs5ghqzxy88uq').label("TransactionHash");
exports.blockNumberSchema = Joi.number().example(14382).label('BlockNumber');
exports.locationPlaceNameSchema = Joi.string().max(255).example('Tomsk').label('LocationPlaceName');
exports.coinAmountSchema = Joi.string().example("281231").label("CoinAmount");
exports.accountAddressSchema = Joi.string().example("0xke2083852Ccf274D48E149F99c80a5c742693418").label("AccountAddress");
exports.accountAddressesSchema = Joi.array().items(exports.accountAddressSchema).label('AccountAddresses');
exports.HTTPVerbSchema = Joi.string().valid(...Object.values(models_1.HTTPVerb)).example(models_1.HTTPVerb.POST).label('HTTPVerb');
exports.inputFromLoginSchema = Joi.string().valid('main', 'dao').label('InputFromLogin');
const outputOkSchema = (res) => {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: res
    });
};
exports.outputOkSchema = outputOkSchema;
exports.paginationFields = {
    limit: Joi.number().integer().default(10).max(100).example(10),
    offset: Joi.number().integer().default(0).example(5)
};
function outputPaginationSchema(title, item) {
    return Joi.object({
        ok: Joi.boolean().example(true),
        result: Joi.object({
            count: Joi.number().integer().example(10),
            [title]: Joi.array().items(item)
        })
    });
}
exports.outputPaginationSchema = outputPaginationSchema;
exports.locationSchema = Joi.object({
    longitude: exports.longitudeSchema.required(),
    latitude: exports.latitudeSchema.required(),
}).label('Location');
exports.emptyOkSchema = Joi.object({
    ok: Joi.boolean().example(true)
}).label("EmptyOkResponse");
exports.jwtTokens = Joi.object({
    access: exports.jwtTokenAccess,
    refresh: exports.jwtTokenRefresh,
}).label("JwtTokensSchema");
exports.phoneSchema = Joi.object({
    codeRegion: Joi.string().example('+7').label('CodeRegion'),
    phone: exports.mobilePhoneWithoutCountryCodeSchema,
    fullPhone: exports.mobilePhoneFullSchema
}).label('UserPhoneSchema');
exports.locationFullSchema = Joi.object({
    location: exports.locationSchema.required(),
    locationPlaceName: exports.locationPlaceNameSchema.required(),
}).label('LocationFull');
exports.searchByNorthAndSouthCoordinatesSchema = Joi.object({
    north: exports.locationSchema.required(),
    south: exports.locationSchema.required(),
}).label('SearchByNorthAndSouthCoordinates');
exports.sessionPlaceSchema = Joi.object({
    city: Joi.string().label('SessionPlaceCity'),
    country: Joi.string().label('SessionPlaceCountry'),
}).label('SessionPlace');
exports.prioritySchema = Joi.number().valid(...Object.keys(models_1.Priority).map(key => parseInt(key)).filter(key => !isNaN(key))).example(models_1.Priority.AllPriority).label('Priority');
exports.prioritiesSchema = Joi.array().items(exports.prioritySchema).label('Priorities');
exports.workPlaceSchema = Joi.string().valid(...Object.values(models_1.WorkPlace)).example(models_1.WorkPlace.Distant).label('WorkPlace');
exports.workPlacesSchema = Joi.array().items(exports.workPlaceSchema).label('WorkPlaces');
