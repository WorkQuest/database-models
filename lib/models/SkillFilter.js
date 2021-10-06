"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SkillFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillFilter = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const Quest_1 = require("./quest/Quest");
const User_1 = require("./user/User");
let SkillFilter = SkillFilter_1 = class SkillFilter extends sequelize_typescript_1.Model {
    static toMapSkills(skillsRaw) {
        const skillsMap = {};
        for (const skill of skillsRaw) {
            if (!skillsMap[skill.category])
                skillsMap[skill.category] = [];
            skillsMap[skill.category].push(skill.skill);
        }
        return skillsMap;
    }
    static toRawSkills(skillsMap, alias, id) {
        const serializedSkills = [];
        for (const [category, skills] of Object.entries(skillsMap)) {
            skills.forEach(skill => serializedSkills.push({ [alias]: id, category, skill }));
        }
        return serializedSkills;
    }
    static splitByFields(skillsMap) {
        const skills = [];
        const categories = [];
        for (const [key, value] of Object.entries(skillsMap)) {
            categories.push(key);
            skills.push(...value);
        }
        return { skills, categories };
    }
    static toRawUserSkills(skillsMap, userId) {
        return SkillFilter_1.toRawSkills(skillsMap, 'userId', userId);
    }
    static toRawQuestSkills(skillsMap, questId) {
        return SkillFilter_1.toRawSkills(skillsMap, 'questId', questId);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING, defaultValue: () => utils_1.getUUID() })
], SkillFilter.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], SkillFilter.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Quest_1.Quest),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, defaultValue: null })
], SkillFilter.prototype, "questId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SkillFilter.prototype, "category", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], SkillFilter.prototype, "skill", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User)
], SkillFilter.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Quest_1.Quest)
], SkillFilter.prototype, "quest", void 0);
SkillFilter = SkillFilter_1 = __decorate([
    sequelize_typescript_1.Scopes(() => ({
        defaultScope: {
            attributes: {
                exclude: ["updatedAt"],
            }
        }
    })),
    sequelize_typescript_1.Table
], SkillFilter);
exports.SkillFilter = SkillFilter;
