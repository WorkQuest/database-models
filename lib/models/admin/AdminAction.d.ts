import { Model } from "sequelize-typescript";
import { Admin } from "./Admin";
export declare enum AdminActionMethod {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete"
}
export declare class AdminAction extends Model {
    id: string;
    adminId: string;
    method: string;
    path: AdminActionMethod;
    admin: Admin;
}
