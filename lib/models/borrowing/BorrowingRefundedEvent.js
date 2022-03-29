"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowingRefundedEvent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const Borrowing_1 = require("./Borrowing");
let BorrowingRefundedEvent = class BorrowingRefundedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], BorrowingRefundedEvent.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Borrowing_1.Borrowing),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingRefundedEvent.prototype, "borrowingId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingRefundedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingRefundedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingRefundedEvent.prototype, "nonce", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingRefundedEvent.prototype, "borrower", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingRefundedEvent.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingRefundedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Borrowing_1.Borrowing)
], BorrowingRefundedEvent.prototype, "borrowing", void 0);
BorrowingRefundedEvent = __decorate([
    sequelize_typescript_1.Table
], BorrowingRefundedEvent);
exports.BorrowingRefundedEvent = BorrowingRefundedEvent;
