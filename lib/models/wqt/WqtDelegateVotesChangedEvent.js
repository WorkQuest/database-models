"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WqtDelegateVotesChangedEvent = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../../utils");
const User_1 = require("../user/User");
let WqtDelegateVotesChangedEvent = class WqtDelegateVotesChangedEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], WqtDelegateVotesChangedEvent.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true })
], WqtDelegateVotesChangedEvent.prototype, "delegatorUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true })
], WqtDelegateVotesChangedEvent.prototype, "delegateeUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('transactionHash', value.toLowerCase());
        }
    })
], WqtDelegateVotesChangedEvent.prototype, "transactionHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('delegator', value.toLowerCase());
        }
    })
], WqtDelegateVotesChangedEvent.prototype, "delegator", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('delegatee', value.toLowerCase());
        }
    })
], WqtDelegateVotesChangedEvent.prototype, "delegatee", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], WqtDelegateVotesChangedEvent.prototype, "previousBalance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL)
], WqtDelegateVotesChangedEvent.prototype, "newBalance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], WqtDelegateVotesChangedEvent.prototype, "blockNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], WqtDelegateVotesChangedEvent.prototype, "timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], WqtDelegateVotesChangedEvent.prototype, "network", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], WqtDelegateVotesChangedEvent.prototype, "delegatorUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], WqtDelegateVotesChangedEvent.prototype, "delegateeUser", void 0);
WqtDelegateVotesChangedEvent = __decorate([
    sequelize_typescript_1.Table
], WqtDelegateVotesChangedEvent);
exports.WqtDelegateVotesChangedEvent = WqtDelegateVotesChangedEvent;
