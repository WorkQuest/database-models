import { Model } from 'sequelize-typescript';
import { Media } from '../Media';
import { Report } from "./Report";
export declare class ReportMedia extends Model {
    id: string;
    mediaId: string;
    reportId: string;
    media: Media;
    report: Report;
}
