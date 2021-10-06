
enum BlockchainNetworks {
  bscMainNetwork = 'bscMainNetwork',
  ethMainNetwork = 'ethMainNetwork',
}

type LocationType = {
  longitude: number;
  latitude: number;
}

type LocationPostGISType = {
  type: "Point";
  coordinates: [number, number];
  crs: { type: "name", properties: { name: "EPSG:4326" } };
}

export {
  LocationType,
  BlockchainNetworks,
  LocationPostGISType,
}
