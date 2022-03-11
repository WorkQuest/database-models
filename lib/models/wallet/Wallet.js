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
const User_1 = require("../user/User");
const bech32_1 = require("../../utils/bech32");
let Wallet = class Wallet extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID(), primaryKey: true })
], Wallet.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Wallet.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Wallet.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const hexAddress = this.getDataValue('address');
            return bech32_1.converter('eth').toBech32(hexAddress);
        },
        set() {
            throw Error('Can`t set this field');
        }
    })
], Wallet.prototype, "bech32Address", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Wallet.prototype, "publicKey", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Wallet.prototype, "user", void 0);
Wallet = __decorate([
    sequelize_typescript_1.Table
], Wallet);
exports.Wallet = Wallet;
