"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let ReferralProgramEventRewardClaimed = class ReferralProgramEventRewardClaimed extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], ReferralProgramEventRewardClaimed.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ReferralProgramEventRewardClaimed.prototype, "transactionHash", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ReferralProgramEventRewardClaimed.prototype, "affiliate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ReferralProgramEventRewardClaimed.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ReferralProgramEventRewardClaimed.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], ReferralProgramEventRewardClaimed.prototype, "network", void 0);
ReferralProgramEventRewardClaimed = __decorate([
    sequelize_typescript_1.Table
], ReferralProgramEventRewardClaimed);
exports.ReferralProgramEventRewardClaimed = ReferralProgramEventRewardClaimed;
