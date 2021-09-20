import { Model } from "sequelize-typescript";
import { Message } from "./Message";
export declare enum MessageAction {
    groupChatCreate = "groupChatCreate",
    groupChatAddUser = "groupChatAddUser",
    groupChatDeleteUser = "groupChatDeleteUser",
    groupChatLeaveUser = "groupChatLeaveUser"
}
export declare class InfoMessage extends Model {
    id: string;
    messageId: string;
    userId: string;
    messageAction: MessageAction;
    message: Message;
}
