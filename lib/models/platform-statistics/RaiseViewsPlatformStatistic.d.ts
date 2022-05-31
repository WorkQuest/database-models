import { Model } from "sequelize-typescript";
export declare class RaiseViewsPlatformStatistic extends Model {
    profilesTotal: number;
    profilesGoldPlus: number;
    profilesGold: number;
    profilesSilver: number;
    profilesBronze: number;
    questsTotal: number;
    questsGoldPlus: number;
    questsGold: number;
    questsSilver: number;
    questsBronze: number;
    date: Date;
}
