"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowingBorrowedEvent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Borrowing_1 = require("./Borrowing");
const utils_1 = require("../../utils");
let BorrowingBorrowedEvent = class BorrowingBorrowedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], BorrowingBorrowedEvent.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Borrowing_1.Borrowing),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], BorrowingBorrowedEvent.prototype, "borrowingId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingBorrowedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingBorrowedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingBorrowedEvent.prototype, "nonce", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingBorrowedEvent.prototype, "borrower", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingBorrowedEvent.prototype, "collateral", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingBorrowedEvent.prototype, "credit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], BorrowingBorrowedEvent.prototype, "symbol", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], BorrowingBorrowedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Borrowing_1.Borrowing)
], BorrowingBorrowedEvent.prototype, "borrowing", void 0);
BorrowingBorrowedEvent = __decorate([
    sequelize_typescript_1.Table
], BorrowingBorrowedEvent);
exports.BorrowingBorrowedEvent = BorrowingBorrowedEvent;
