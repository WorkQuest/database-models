import { Model } from "sequelize-typescript";
import { Message } from "./Message";
import { ChatMember } from "./ChatMember";
import { User } from "./User";
export declare class Chat extends Model {
    id: string;
    creatorUserId: string;
    creator: User;
    message: Message[];
    members: ChatMember[];
    mustHaveMember(userId: String): void;
}
