import { Model } from "sequelize-typescript";
import { Admin } from "../admin/Admin";
export declare class AdminWallet extends Model {
    address: string;
    adminId: string;
    bech32Address: string;
    publicKey: string;
    admin: Admin;
}
