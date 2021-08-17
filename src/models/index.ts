import {Sequelize} from "sequelize-typescript";
import {User} from "./User";
import {Session} from "./Session";
import {Quest} from "./Quest";
import {QuestsResponse} from "./QuestsResponse";
import {Media} from "./Media";
import {QuestMedia} from "./QuestMedia";
import {Review} from "./Review";
import {RatingStatistic} from "./RatingStatistic";
import {StarredQuests} from './StarredQuests';
import {PortfolioMedia} from './PortfolioMedia';
import {Portfolio} from './Portfolio';
import {Admin} from './Admin'
import {AdminSession} from "./AdminSession";
import {Chat} from "./Chat";
import {ChatMember} from "./ChatMember";
import {MessageMedia} from "./MessageMedia";
import {Message} from "./Message";
import {Comment} from "./Comment";
import {LikeComment} from "./CommentLike";
import {CommentMedia} from "./CommentMedia";
import {News} from "./News";
import {LikeNews} from "./NewsLike";
import {NewsMedia} from "./NewsMedia";

export async function initDatabase(dbLink: string, logging = false, sync = false) {
    const sequelize = new Sequelize(dbLink, {
        logging,
        dialect: "postgres",
        models: [
            StarredQuests,
            User,
            Session,
            Quest,
            QuestsResponse,
            Media,
            QuestMedia,
            Review,
            RatingStatistic,
            Portfolio,
            PortfolioMedia,
            Admin,
            AdminSession,
            Chat,
            ChatMember,
            Message,
            MessageMedia,
            Comment,
            LikeComment,
            CommentMedia,
            News,
            LikeNews,
            NewsMedia
        ]
    });
    if (sync)
        await sequelize.sync();

    return sequelize;
}

export * from "./User";
export * from "./Session";
export * from "./Quest";
export * from "./QuestsResponse";
export * from "./Media";
export * from "./QuestMedia";
export * from "./Review";
export * from "./RatingStatistic";
export * from "./StarredQuests";
export * from "./PortfolioMedia";
export * from "./Portfolio";
export * from "./Admin";
export * from "./AdminSession";
export * from "./Chat";
export * from "./ChatMember";
export * from "./Message";
export * from "./MessageMedia";


