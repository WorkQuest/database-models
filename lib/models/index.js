"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Session_1 = require("./Session");
const Quest_1 = require("./Quest");
const QuestsResponse_1 = require("./QuestsResponse");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./QuestMedia");
const Review_1 = require("./Review");
const RatingStatistic_1 = require("./RatingStatistic");
const StarredQuests_1 = require("./StarredQuests");
const PortfolioMedia_1 = require("./PortfolioMedia");
const Portfolio_1 = require("./Portfolio");
const Admin_1 = require("./Admin");
const AdminSession_1 = require("./AdminSession");
const Chat_1 = require("./Chat");
const ChatMember_1 = require("./ChatMember");
const MessageMedia_1 = require("./MessageMedia");
const Message_1 = require("./Message");
const Filter_1 = require("./Filter");
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            logging,
            dialect: "postgres",
            models: [StarredQuests_1.StarredQuests,
                User_1.User,
                Session_1.Session,
                Quest_1.Quest,
                QuestsResponse_1.QuestsResponse,
                Media_1.Media,
                QuestMedia_1.QuestMedia,
                Review_1.Review,
                RatingStatistic_1.RatingStatistic,
                Portfolio_1.Portfolio,
                PortfolioMedia_1.PortfolioMedia,
                Admin_1.Admin,
                AdminSession_1.AdminSession,
                Chat_1.Chat,
                ChatMember_1.ChatMember,
                Message_1.Message,
                MessageMedia_1.MessageMedia,
                Filter_1.Filter,
            ]
        });
        if (sync)
            yield sequelize.sync();
        return sequelize;
    });
}
exports.initDatabase = initDatabase;
__exportStar(require("./User"), exports);
__exportStar(require("./Session"), exports);
__exportStar(require("./Quest"), exports);
__exportStar(require("./QuestsResponse"), exports);
__exportStar(require("./Media"), exports);
__exportStar(require("./QuestMedia"), exports);
__exportStar(require("./Review"), exports);
__exportStar(require("./RatingStatistic"), exports);
__exportStar(require("./StarredQuests"), exports);
__exportStar(require("./PortfolioMedia"), exports);
__exportStar(require("./Portfolio"), exports);
__exportStar(require("./Admin"), exports);
__exportStar(require("./AdminSession"), exports);
__exportStar(require("./Chat"), exports);
__exportStar(require("./ChatMember"), exports);
__exportStar(require("./Message"), exports);
__exportStar(require("./MessageMedia"), exports);
__exportStar(require("./Filter"), exports);
