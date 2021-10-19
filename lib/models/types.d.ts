declare enum BlockchainNetworks {
    bscMainNetwork = "bscMainNetwork",
    ethMainNetwork = "ethMainNetwork"
}
declare type LocationType = {
    longitude: number;
    latitude: number;
};
declare type LocationPostGISType = {
    type: "Point";
    coordinates: [number, number];
    crs: {
        type: "name";
        properties: {
            name: "EPSG:4326";
        };
    };
};
export { LocationType, BlockchainNetworks, LocationPostGISType, };
