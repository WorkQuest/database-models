import { Model } from "sequelize-typescript";
import { Message } from "./Message";
export declare enum MessageAction {
    messageActionGroupChatCreate = "messageActionGroupChatCreate",
    messageActionGroupChatAddUser = "messageActionGroupChatAddUser",
    messageActionGroupChatDeleteUser = "messageActionGroupChatDeleteUser",
    messageActionGroupChatLeaveUser = "messageActionGroupChatLeaveUser"
}
export declare class InfoMessage extends Model {
    id: string;
    messageId: string;
    userId: string;
    messageAction: MessageAction;
    message: Message;
}
