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
declare enum WorkPlace {
    Distant = "distant",
    Office = "office",
    Both = "both"
}
declare enum Priority {
    AllPriority = 0,
    FixedDelivery = 1,
    ShortTerm = 2,
    Urgent = 3
}
export { Priority, WorkPlace, LocationType, BlockchainNetworks, LocationPostGISType, };
