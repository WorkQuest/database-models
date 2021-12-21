"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proposal = void 0;
const utils_1 = require("../../utils");
const types_1 = require("./types");
const Media_1 = require("../Media");
const User_1 = require("../user/User");
const ProposalMedia_1 = require("./ProposalMedia");
const ProposalCreatedEvent_1 = require("./ProposalCreatedEvent");
const ProposalVoteCastEvent_1 = require("./ProposalVoteCastEvent");
const ProposalExecutedEvent_1 = require("./ProposalExecutedEvent");
const sequelize_typescript_1 = require("sequelize-typescript");
let Proposal = class Proposal extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => (0, utils_1.getUUID)() })
], Proposal.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], Proposal.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Proposal.prototype, "proposer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: types_1.ProposalStatus.Pending })
], Proposal.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ unique: true, allowNull: false, type: sequelize_typescript_1.DataType.DECIMAL, defaultValue: () => (0, utils_1.getUUIDInt)() })
], Proposal.prototype, "nonce", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ProposalCreatedEvent_1.ProposalCreatedEvent)
], Proposal.prototype, "createdEvent", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => ProposalExecutedEvent_1.ProposalExecutedEvent)
], Proposal.prototype, "executedEvent", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ProposalVoteCastEvent_1.ProposalVoteCastEvent)
], Proposal.prototype, "voteCastEvents", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User)
], Proposal.prototype, "author", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Media_1.Media, () => ProposalMedia_1.ProposalMedia)
], Proposal.prototype, "medias", void 0);
Proposal = __decorate([
    (0, sequelize_typescript_1.Scopes)(() => ({
        defaultScope: {
            attributes: {
                exclude: ["updatedAt", "deletedAt"]
            },
            include: [{
                    model: Media_1.Media.scope("urlOnly"),
                    as: "medias",
                    through: { attributes: [] }
                }]
        },
    })),
    (0, sequelize_typescript_1.Table)({ paranoid: true })
], Proposal);
exports.Proposal = Proposal;
