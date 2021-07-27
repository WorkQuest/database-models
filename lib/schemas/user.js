"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.userRoleSchema = exports.userIdSchema = exports.avatarSchema = exports.lastNameSchema = exports.firstNameSchema = exports.passwordSchema = exports.emailSchema = void 0;
const Joi = require("joi");
const User_1 = require("../models/User");
exports.emailSchema = Joi.string().email().max(1000).example("user@example.com").label("UserEmail");
exports.passwordSchema = Joi.string().min(8).max(1000).example("p@ssw0rd").label("UserPassword");
exports.firstNameSchema = Joi.string().min(1).max(1000).example("ivan").label("UserFirstName");
exports.lastNameSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserLastName");
exports.avatarSchema = Joi.string().min(1).max(1000).example("ivanov").label("UserAvatar");
exports.userIdSchema = Joi.string().uuid().example("fa0e2e4e-c53f-4af7-8906-1649daa0cce3").label("UserId");
exports.userRoleSchema = Joi.string().allow(...Object.values(User_1.UserRole)).example(User_1.UserRole.Worker).label("UserRole");
exports.userSchema = Joi.object({
    id: exports.userIdSchema,
    firstName: exports.firstNameSchema,
    lastName: exports.lastNameSchema,
    email: exports.emailSchema,
    role: exports.userRoleSchema
}).label("UserSchema");
