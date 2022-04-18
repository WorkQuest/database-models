"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStatus = exports.MemberType = exports.HTTPVerb = exports.BlackListStatus = exports.Priority = exports.WorkPlace = exports.BlockchainNetworks = void 0;
var BlockchainNetworks;
(function (BlockchainNetworks) {
    BlockchainNetworks["bscMainNetwork"] = "bscMainNetwork";
    BlockchainNetworks["ethMainNetwork"] = "ethMainNetwork";
    BlockchainNetworks["rinkebyTestNetwork"] = "rinkebyTestNetwork";
    BlockchainNetworks["bscTestNetwork"] = "bscTestNetwork";
    BlockchainNetworks["workQuestNetwork"] = "workQuestNetwork";
    BlockchainNetworks["workQuestDevNetwork"] = "workQuestDevNetwork";
})(BlockchainNetworks = exports.BlockchainNetworks || (exports.BlockchainNetworks = {}));
var WorkPlace;
(function (WorkPlace) {
    WorkPlace["Distant"] = "distant";
    WorkPlace["Office"] = "office";
    WorkPlace["Both"] = "both";
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
    MemberType["Admin"] = "admin";
    MemberType["User"] = "user";
})(MemberType = exports.MemberType || (exports.MemberType = {}));
var RatingStatus;
(function (RatingStatus) {
    RatingStatus[RatingStatus["topRanked"] = 0] = "topRanked";
    RatingStatus[RatingStatus["reliable"] = 1] = "reliable";
    RatingStatus[RatingStatus["verified"] = 2] = "verified";
    RatingStatus[RatingStatus["noStatus"] = 3] = "noStatus";
    RatingStatus[RatingStatus["AllStatuses"] = 4] = "AllStatuses";
})(RatingStatus = exports.RatingStatus || (exports.RatingStatus = {}));
