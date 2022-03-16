
export enum BlockchainNetworks {
  bscMainNetwork = 'bscMainNetwork',
  ethMainNetwork = 'ethMainNetwork',
  rinkebyTestNetwork = 'rinkebyTestNetwork',
  bscTestNetwork = 'bscTestNetwork',
  workQuestNetwork = 'workQuestNetwork',        // TODO remove because legacy
  workQuestDevNetwork = 'workQuestDevNetwork',
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

export enum HTTPVerb {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum NetworkProfileVisibilityType {
  EveryoneOnThInternet = 0,
  RegisteredUsers = 1,
  SubmittingOffer = 2,
}
