"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
let SwapParser = class SwapParser extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], SwapParser.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapParser.prototype, "totalUSD", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapParser.prototype, "bnbAmount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapParser.prototype, "wqtAmount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapParser.prototype, "account", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], SwapParser.prototype, "timestamp", void 0);
SwapParser = __decorate([
    sequelize_typescript_1.Table
], SwapParser);
exports.SwapParser = SwapParser;
