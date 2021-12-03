
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

enum WorkPlace {
  Distant = "distant",
  Office = "office",
  Both = "both"
}

enum Priority {
  AllPriority = 0,
  FixedDelivery,
  ShortTerm,
  Urgent,
}

export {
  Priority,
  WorkPlace,
  LocationType,
  BlockchainNetworks,
  LocationPostGISType,
}
