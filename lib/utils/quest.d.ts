import { Location } from '../models';
export declare function transformToGeoPostGIS(location: Location): {
    type: string;
    coordinates: number[];
    crs: {
        type: string;
        properties: {
            name: string;
        };
    };
};
