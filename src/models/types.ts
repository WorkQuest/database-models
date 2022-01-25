
export enum BlockchainNetworks {
  bscMainNetwork = 'bscMainNetwork',
  ethMainNetwork = 'ethMainNetwork',
  rinkebyTestNetwork = 'rinkebyTestNetwork',
  bscTestNetwork = 'bscTestNetwork',
}

export type LocationType = {
  longitude: number;
  latitude: number;
}

export type LocationPostGISType = {
  type: "Point";
  coordinates: [number, number];
  crs: { type: "name", properties: { name: "EPSG:4326" } };
}

export enum WorkPlace {
  Distant = "distant",
  Office = "office",
  Both = "both"
}

export enum Priority {
  AllPriority = 0,
  FixedDelivery,
  ShortTerm,
  Urgent,
}

export type Phone = {
  codeRegion: string,
  phone: string,
  fullPhone: string,
}

export type Place = {
  country: string | null;
  city: string | null;
}

export enum BlackListStatus {
  Blocked,
  Unblocked
}
