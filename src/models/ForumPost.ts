import {
    Column, DataType, ForeignKey, Model, Table, BelongsTo, HasMany, BelongsToMany, Scopes
} from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";
import { ForumPostComment } from "./ForumPostComment";
import { Media } from "./Media";
import { ForumPostMedia } from "./ForumPostMedia";
import { ForumPostLike } from "./ForumPostLike";

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ["rootComments"]
        },
        include: [{
            model: Media.scope("urlOnly"),
            as: "medias",
            through: {
                attributes: []
            }
        }, {
            model: User.scope("short"),
            as: "userLikes",
            through: {
                attributes: ["id"]
            }
        }]
    },
    withRootComments: {
        include: [{
            model: ForumPostComment,
            as: "rootComments",
            where: { rootCommentId: null }
        }, {
            model: Media.scope("urlOnly"),
            as: "medias",
            through: {
                attributes: []
            }
        }, {
            model: User,
            as: "userLikes",
            through: {
                attributes: ['id']
            }
        }]
    }
}))
@Table({ paranoid: true })
export class ForumPost extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @Column({ type: DataType.TEXT, allowNull: false }) text: string;

  @BelongsTo(() => User) author: User;

  @HasMany(() => ForumPostComment) rootComments: ForumPostComment[];
  @HasMany(() => ForumPostLike) likes: ForumPostLike[];

  @BelongsToMany(() => Media, () => ForumPostMedia) medias: Media[];
  @BelongsToMany(() => User, () => ForumPostLike) userLikes: User[];
}
