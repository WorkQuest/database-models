import { Model } from "sequelize-typescript";
export declare class UsersPlatformStatistic extends Model {
    registered: number;
    finished: number;
    unfinished: number;
    workers: number;
    employers: number;
    linkedin: number;
    twitter: number;
    facebook: number;
    google: number;
    smsPassed: number;
    smsFailed: number;
    kycPassed: number;
    kycFailed: number;
    useWeb: number;
    useApp: number;
    useWallet: number;
    use2FA: number;
    date: Date;
}
