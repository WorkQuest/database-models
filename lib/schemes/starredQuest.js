"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("./common");
const user_1 = require("./user");
const chat_1 = require("./chat");
exports.starredMessageScheme = Joi.object({
    id: common_1.idSchema,
    userId: common_1.idSchema,
    messageId: common_1.idSchema,
    user: user_1.userSchema,
    message: chat_1.messageSchema,
});
