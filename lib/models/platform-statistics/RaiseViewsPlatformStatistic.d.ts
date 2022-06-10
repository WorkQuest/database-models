import { Model } from "sequelize-typescript";
export declare class RaiseViewsPlatformStatistic extends Model {
    profilesSum: number;
    profilesTotal: number;
    profilesGoldPlus: number;
    profilesGold: number;
    profilesSilver: number;
    profilesBronze: number;
    questsSum: number;
    questsTotal: number;
    questsGoldPlus: number;
    questsGold: number;
    questsSilver: number;
    questsBronze: number;
    date: Date;
}
