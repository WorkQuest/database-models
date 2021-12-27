import { Model } from "sequelize-typescript";
import { User } from "../user/User";
export declare class Wallet extends Model {
    id: string;
    userId: string;
    address: string;
    bech32Address: string;
    publicKey: string;
    user: User;
}
