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
    smsNotPassed: number;
    kycPassed: number;
    kycNotPassed: number;
    useWeb: number;
    useApp: number;
    useWallet: number;
    noStatus: number;
    verified: number;
    reliable: number;
    topRanked: number;
    averageSessionTime: number;
    use2FA: number;
    date: Date;
}
