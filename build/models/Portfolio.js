"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const User_1 = require("./User");
const PortfolioMedia_1 = require("./PortfolioMedia");
const Media_1 = require("./Media");
const errors_1 = require("../utils/errors");
let Portfolio = class Portfolio extends sequelize_typescript_1.Model {
    mustBeCaseCreator(userId) {
        if (this.userId !== userId) {
            throw utils_1.error(errors_1.Errors.Forbidden, "User is not portfolio creator", {
                current: this.userId,
                mustHave: userId
            });
        }
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() }),
    __metadata("design:type", String)
], Portfolio.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User), sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Portfolio.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Portfolio.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Portfolio.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Media_1.Media, () => PortfolioMedia_1.PortfolioMedia),
    __metadata("design:type", Array)
], Portfolio.prototype, "medias", void 0);
Portfolio = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            include: [{
                    model: Media_1.Media.scope('urlOnly'),
                    as: 'medias',
                    through: {
                        attributes: []
                    }
                }]
        }
    })),
    sequelize_typescript_1.Table
], Portfolio);
exports.Portfolio = Portfolio;
//# sourceMappingURL=Portfolio.js.map