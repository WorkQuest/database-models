"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminWallet = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Admin_1 = require("../admin/Admin");
const bech32_converting_1 = __importDefault(require("bech32-converting"));
let AdminWallet = class AdminWallet extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], AdminWallet.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Admin_1.Admin),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], AdminWallet.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const hexAddress = this.getDataValue('address');
            return (0, bech32_converting_1.default)('wq').toBech32(hexAddress);
        },
        set() {
            throw Error('Can`t set this field');
        }
    })
], AdminWallet.prototype, "bech32Address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], AdminWallet.prototype, "publicKey", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Admin_1.Admin)
], AdminWallet.prototype, "admin", void 0);
AdminWallet = __decorate([
    sequelize_typescript_1.Table
], AdminWallet);
exports.AdminWallet = AdminWallet;
