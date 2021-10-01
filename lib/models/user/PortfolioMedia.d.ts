import { Model } from 'sequelize-typescript';
import { Media } from '../Media';
import { Portfolio } from './Portfolio';
export declare class PortfolioMedia extends Model {
    id: string;
    mediaId: string;
    portfolioId: string;
    media: Media;
    portfolio: Portfolio;
}
