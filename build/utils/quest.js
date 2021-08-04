"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformToGeoPostGIS(location) {
    const coordinates = [location.longitude, location.latitude];
    return {
        type: "Point",
        coordinates: coordinates,
        crs: { type: "name", properties: { name: "EPSG:4326" } }
    };
}
exports.transformToGeoPostGIS = transformToGeoPostGIS;
//# sourceMappingURL=quest.js.map