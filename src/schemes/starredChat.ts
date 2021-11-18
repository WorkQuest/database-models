import * as Joi from "joi";
import {idSchema} from "./common";
import {userSchema} from "./user";
import {messageSchema} from "./chat";

export const starredChatScheme = Joi.object({
  id: idSchema,
  userId: idSchema,
  chatId: idSchema,
  user: userSchema,
  chat: messageSchema,
});
