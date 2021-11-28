import { Model } from 'sequelize-typescript';
import { User } from './User';
import { Media } from '../Media';
export declare class Portfolio extends Model {
    id: string;
    userId: string;
    title: string;
    description: string;
    user: User;
    medias: Media[];
    mustBeCaseCreator(userId: String): void;
}
