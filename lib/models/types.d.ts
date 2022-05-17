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
    Remote = "Remote",
    InOffice = "InOffice",
    Hybrid = "Hybrid"
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
    None = 0,
    NoStatus = 1,
    Verified = 2,
    Reliable = 4,
    TopRanked = 8,
    AllStatuses = 15
}
export declare const RatingStatuses: RatingStatus[];
export declare enum PayPeriod {
    Hourly = "Hourly",
    Daily = "Daily",
    Weekly = "Weekly",
    BiWeekly = "BiWeekly",
    SemiMonthly = "SemiMonthly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    SemiAnnually = "SemiAnnually",
    Annually = "Annually",
    FixedPeriod = "FixedPeriod",
    ByAgreement = "ByAgreement"
}
