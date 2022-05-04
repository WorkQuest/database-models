export declare enum BlockchainNetworks {
    bscMainNetwork = "bscMainNetwork",
    ethMainNetwork = "ethMainNetwork",
    rinkebyTestNetwork = "rinkebyTestNetwork",
    bscTestNetwork = "bscTestNetwork",
    workQuestNetwork = "workQuestNetwork",
    workQuestDevNetwork = "workQuestDevNetwork"
}
export declare type LocationType = {
    longitude: number;
    latitude: number;
};
export declare type LocationPostGISType = {
    type: "Point";
    coordinates: [number, number];
    crs: {
        type: "name";
        properties: {
            name: "EPSG:4326";
        };
    };
};
export declare enum WorkPlace {
    Remote = "remote",
    InOffice = "inOffice",
    Hybrid = "hybrid"
}
export declare enum Priority {
    AllPriority = 0,
    FixedDelivery = 1,
    ShortTerm = 2,
    Urgent = 3
}
export declare type Phone = {
    codeRegion: string;
    phone: string;
    fullPhone: string;
};
export declare type Place = {
    country: string | null;
    city: string | null;
};
export declare enum BlackListStatus {
    Blocked = 0,
    Unblocked = 1
}
export declare enum HTTPVerb {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare enum RatingStatus {
    topRanked = 0,
    reliable = 1,
    verified = 2,
    noStatus = 3,
    AllStatuses = 4
}
export declare enum PayPeriod {
    Hourly = "hourly",
    Daily = "daily",
    Weekly = "weekly",
    BiWeekly = "biWeekly",
    SemiMonthly = "semiMonthly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    SemiAnnually = "semiAnnually",
    Annually = "annually",
    FixedPeriod = "fixedPeriod",
    ByAgreement = "byAgreement"
}
