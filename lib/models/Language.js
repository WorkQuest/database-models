"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const Admin_1 = require("./Admin");
var LanguagesEnum;
(function (LanguagesEnum) {
    LanguagesEnum["en"] = "en";
    LanguagesEnum["ru"] = "ru";
    LanguagesEnum["ba"] = "ba";
    LanguagesEnum["zh"] = "zh";
    LanguagesEnum["fr"] = "fr";
    LanguagesEnum["hi"] = "hi";
    LanguagesEnum["in"] = "in";
    LanguagesEnum["po"] = "po";
    LanguagesEnum["sp"] = "sp";
    LanguagesEnum["ae"] = "ae";
})(LanguagesEnum = exports.LanguagesEnum || (exports.LanguagesEnum = {}));
exports.languages = Object.values(LanguagesEnum);
let Language = class Language extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: utils_1.getUUID, primaryKey: true })
], Language.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Admin_1.Admin),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Language.prototype, "adminId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Language.prototype, "language", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Admin_1.Admin)
], Language.prototype, "admin", void 0);
Language = __decorate([
    sequelize_typescript_1.Table
], Language);
exports.Language = Language;
