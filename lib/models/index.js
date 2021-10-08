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
const User_1 = require("./user/User");
const Session_1 = require("./user/Session");
const Quest_1 = require("./quest/Quest");
const QuestsResponse_1 = require("./quest/QuestsResponse");
const Media_1 = require("./Media");
const QuestMedia_1 = require("./quest/QuestMedia");
const Review_1 = require("./quest/Review");
const RatingStatistic_1 = require("./user/RatingStatistic");
const StarredQuests_1 = require("./quest/StarredQuests");
const PortfolioMedia_1 = require("./user/PortfolioMedia");
const Portfolio_1 = require("./user/Portfolio");
const Admin_1 = require("./user/Admin");
const AdminSession_1 = require("./user/AdminSession");
const Chat_1 = require("./chats/Chat");
const ChatMember_1 = require("./chats/ChatMember");
const MessageMedia_1 = require("./chats/MessageMedia");
const Message_1 = require("./chats/Message");
const InfoMessage_1 = require("./chats/InfoMessage");
const StarredMessage_1 = require("./chats/StarredMessage");
const BridgeParserBlockInfo_1 = require("./bridge/BridgeParserBlockInfo");
const BridgeSwapTokenEvent_1 = require("./bridge/BridgeSwapTokenEvent");
const IndustryFilter_1 = require("./filtres/IndustryFilter");
const SpecializationFilter_1 = require("./filtres/SpecializationFilter");
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            logging,
            dialect: "postgres",
            models: [
                User_1.User,
                Session_1.Session,
                Quest_1.Quest,
                StarredQuests_1.StarredQuests,
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
                InfoMessage_1.InfoMessage,
                StarredMessage_1.StarredMessage,
                BridgeParserBlockInfo_1.BridgeParserBlockInfo,
                BridgeSwapTokenEvent_1.BridgeSwapTokenEvent,
                IndustryFilter_1.IndustryFilter,
                SpecializationFilter_1.SpecializationFilter,
            ]
        });
        if (sync)
            yield sequelize.sync();
        return sequelize;
    });
}
exports.initDatabase = initDatabase;
__exportStar(require("./types"), exports);
__exportStar(require("./user/User"), exports);
__exportStar(require("./user/Session"), exports);
__exportStar(require("./quest/Quest"), exports);
__exportStar(require("./quest/QuestsResponse"), exports);
__exportStar(require("./Media"), exports);
__exportStar(require("./quest/QuestMedia"), exports);
__exportStar(require("./quest/Review"), exports);
__exportStar(require("./user/RatingStatistic"), exports);
__exportStar(require("./quest/StarredQuests"), exports);
__exportStar(require("./user/PortfolioMedia"), exports);
__exportStar(require("./user/Portfolio"), exports);
__exportStar(require("./user/Admin"), exports);
__exportStar(require("./user/AdminSession"), exports);
__exportStar(require("./chats/Chat"), exports);
__exportStar(require("./chats/ChatMember"), exports);
__exportStar(require("./chats/Message"), exports);
__exportStar(require("./chats/MessageMedia"), exports);
__exportStar(require("./chats/InfoMessage"), exports);
__exportStar(require("./chats/StarredMessage"), exports);
__exportStar(require("./bridge/BridgeParserBlockInfo"), exports);
__exportStar(require("./bridge/BridgeSwapTokenEvent"), exports);
__exportStar(require("./filtres/IndustryFilter"), exports);
__exportStar(require("./filtres/SpecializationFilter"), exports);
