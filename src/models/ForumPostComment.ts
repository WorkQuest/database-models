import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
    BelongsTo,
    HasMany, BelongsToMany, Scopes
} from "sequelize-typescript";
import { getUUID } from "../utils";
import { User } from "./User";
import { ForumPost } from "./ForumPost";
import { ForumPostCommentMedia } from "./ForumPostCommentMedia";
import { Media } from "./Media";
import { ForumPostCommentLike } from "./ForumPostCommentLike";

@Scopes(() => ({
    defaultScope: {
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
                attributes: []
            }
        }]
    },
    withSubComments: {
        include: [{
            model: ForumPostComment,
            as: 'subComments'
        }, {
            model: Media.scope("urlOnly"),
            as: "medias",
            through: {
                attributes: []
            }
        }, {
            model: User.scope("short"),
            as: "userLikes",
            through: {
                attributes: []
            }
        }]
    }
}))
@Table
export class ForumPostComment extends Model {
  @Column({ primaryKey: true, type: DataType.STRING, defaultValue: () => getUUID() }) id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, allowNull: false }) authorId: string;

  @ForeignKey(() => ForumPost)
  @Column({ type: DataType.STRING, allowNull: false }) forumPostId: string;

  @ForeignKey(() => ForumPostComment)
  @Column(DataType.STRING) rootCommentId: string;

  @Column({ type: DataType.TEXT, allowNull: false }) text: string;

  @BelongsTo(() => User) author: User;
  @BelongsTo(() => ForumPost) forumPost: ForumPost;
  @BelongsTo(() => ForumPostComment) rootComment: ForumPostComment;

  @HasMany(() => ForumPostComment) subComments: ForumPostComment[];
  @HasMany(() => ForumPostCommentLike) likeComment: ForumPostCommentLike[];

  @BelongsToMany(() => Media, () => ForumPostCommentMedia) medias: Media[];
  @BelongsToMany(() => User, () => ForumPostCommentLike) userLikes: User[];
}
