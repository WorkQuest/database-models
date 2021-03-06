"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPeriod = exports.RatingStatuses = exports.RatingStatus = exports.MemberType = exports.HTTPVerb = exports.BlackListStatus = exports.Priority = exports.WorkPlace = exports.BlockchainNetworks = void 0;
var BlockchainNetworks;
(function (BlockchainNetworks) {
    BlockchainNetworks["bscMainNetwork"] = "bscMainNetwork";
    BlockchainNetworks["ethMainNetwork"] = "ethMainNetwork";
    BlockchainNetworks["rinkebyTestNetwork"] = "rinkebyTestNetwork";
    BlockchainNetworks["bscTestNetwork"] = "bscTestNetwork";
    BlockchainNetworks["workQuestNetwork"] = "workQuestNetwork";
    BlockchainNetworks["workQuestDevNetwork"] = "workQuestDevNetwork";
    BlockchainNetworks["polygonMainNetwork"] = "polygonMainNetwork";
    BlockchainNetworks["mumbaiTestNetwork"] = "mumbaiTestNetwork";
})(BlockchainNetworks = exports.BlockchainNetworks || (exports.BlockchainNetworks = {}));
var WorkPlace;
(function (WorkPlace) {
    WorkPlace["Remote"] = "Remote";
    WorkPlace["InOffice"] = "InOffice";
    WorkPlace["Hybrid"] = "Hybrid";
})(WorkPlace = exports.WorkPlace || (exports.WorkPlace = {}));
var Priority;
(function (Priority) {
    Priority[Priority["AllPriority"] = 0] = "AllPriority";
    Priority[Priority["FixedDelivery"] = 1] = "FixedDelivery";
    Priority[Priority["ShortTerm"] = 2] = "ShortTerm";
    Priority[Priority["Urgent"] = 3] = "Urgent";
})(Priority = exports.Priority || (exports.Priority = {}));
var BlackListStatus;
(function (BlackListStatus) {
    BlackListStatus[BlackListStatus["Blocked"] = 0] = "Blocked";
    BlackListStatus[BlackListStatus["Unblocked"] = 1] = "Unblocked";
})(BlackListStatus = exports.BlackListStatus || (exports.BlackListStatus = {}));
var HTTPVerb;
(function (HTTPVerb) {
    HTTPVerb["GET"] = "GET";
    HTTPVerb["POST"] = "POST";
    HTTPVerb["PUT"] = "PUT";
    HTTPVerb["DELETE"] = "DELETE";
})(HTTPVerb = exports.HTTPVerb || (exports.HTTPVerb = {}));
var MemberType;
(function (MemberType) {
    MemberType["Admin"] = "Admin";
    MemberType["User"] = "User";
})(MemberType = exports.MemberType || (exports.MemberType = {}));
var RatingStatus;
(function (RatingStatus) {
    RatingStatus[RatingStatus["None"] = 0] = "None";
    RatingStatus[RatingStatus["NoStatus"] = 1] = "NoStatus";
    RatingStatus[RatingStatus["Verified"] = 2] = "Verified";
    RatingStatus[RatingStatus["Reliable"] = 4] = "Reliable";
    RatingStatus[RatingStatus["TopRanked"] = 8] = "TopRanked";
    RatingStatus[RatingStatus["AllStatuses"] = 15] = "AllStatuses";
})(RatingStatus = exports.RatingStatus || (exports.RatingStatus = {}));
exports.RatingStatuses = [
    RatingStatus.NoStatus,
    RatingStatus.Verified,
    RatingStatus.Reliable,
    RatingStatus.TopRanked,
];
var PayPeriod;
(function (PayPeriod) {
    PayPeriod["Hourly"] = "Hourly";
    PayPeriod["Daily"] = "Daily";
    PayPeriod["Weekly"] = "Weekly";
    PayPeriod["BiWeekly"] = "BiWeekly";
    PayPeriod["SemiMonthly"] = "SemiMonthly";
    PayPeriod["Monthly"] = "Monthly";
    PayPeriod["Quarterly"] = "Quarterly";
    PayPeriod["SemiAnnually"] = "SemiAnnually";
    PayPeriod["Annually"] = "Annually";
    PayPeriod["FixedPeriod"] = "FixedPeriod";
    PayPeriod["ByAgreement"] = "ByAgreement";
})(PayPeriod = exports.PayPeriod || (exports.PayPeriod = {}));
