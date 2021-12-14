"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const Media_1 = require("../Media");
const User_1 = require("../user/User");
const ProposalMedia_1 = require("./ProposalMedia");
const sequelize_typescript_1 = require("sequelize-typescript");
var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus[ProposalStatus["Pending"] = 0] = "Pending";
    ProposalStatus[ProposalStatus["Active"] = 1] = "Active";
    ProposalStatus[ProposalStatus["Rejected"] = 2] = "Rejected";
    ProposalStatus[ProposalStatus["Accepted"] = 3] = "Accepted";
    ProposalStatus[ProposalStatus["Cancelled"] = 4] = "Cancelled";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
let Proposal = class Proposal extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], Proposal.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "proposer", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "nonceId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], Proposal.prototype, "proposalId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Proposal.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], Proposal.prototype, "votingPeriod", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })
], Proposal.prototype, "minimumQuorum", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: ProposalStatus.Pending })
], Proposal.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
], Proposal.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], Proposal.prototype, "txHash", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], Proposal.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => ProposalMedia_1.ProposalMedia)
], Proposal.prototype, "medias", void 0);
Proposal = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }]
        },
    })),
    sequelize_typescript_1.Table({ paranoid: true })
], Proposal);
exports.Proposal = Proposal;
