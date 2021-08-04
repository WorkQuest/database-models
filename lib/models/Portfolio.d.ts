import { Model } from 'sequelize-typescript';
import { Media } from './Media';
export declare class Portfolio extends Model {
    id: string;
    userId: string;
    title: string;
    description: string;
    medias: Media[];
    mustBeCaseCreator(userId: String): void;
}
