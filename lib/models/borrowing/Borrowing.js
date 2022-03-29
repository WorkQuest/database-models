"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrowing = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const types_1 = require("./types");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
const BorrowingBorrowedEvent_1 = require("./BorrowingBorrowedEvent");
const BorrowingRefundedEvent_1 = require("./BorrowingRefundedEvent");
let Borrowing = class Borrowing extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], Borrowing.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Borrowing.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL, unique: true, allowNull: false, defaultValue: () => (0, utils_1.getUUIDInt)() })
], Borrowing.prototype, "nonce", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.SMALLINT, defaultValue: types_1.BorrowingStatus.Pending })
], Borrowing.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Borrowing.prototype, "term", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], Borrowing.prototype, "collateral", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], Borrowing.prototype, "creditAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], Borrowing.prototype, "remainingCredit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Borrowing.prototype, "symbol", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => BorrowingBorrowedEvent_1.BorrowingBorrowedEvent)
], Borrowing.prototype, "borrowedEvent", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => BorrowingRefundedEvent_1.BorrowingRefundedEvent)
], Borrowing.prototype, "refundedEvents", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], Borrowing.prototype, "user", void 0);
Borrowing = __decorate([
    sequelize_typescript_1.Table
], Borrowing);
exports.Borrowing = Borrowing;
