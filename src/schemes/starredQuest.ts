import * as Joi from "joi";
import {idSchema} from "./common";
import {userSchema} from "./user";
import {messageSchema} from "./chat";

export const starredMessageScheme = Joi.object({
  id: idSchema,
  userId: idSchema,
  messageId: idSchema,
  user: userSchema,
  message: messageSchema,
})
