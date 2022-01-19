"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = exports.WorkPlace = exports.BlockchainNetworks = void 0;
var BlockchainNetworks;
(function (BlockchainNetworks) {
    BlockchainNetworks["bscMainNetwork"] = "bscMainNetwork";
    BlockchainNetworks["ethMainNetwork"] = "ethMainNetwork";
    BlockchainNetworks["rinkebyTestNetwork"] = "rinkebyTestNetwork";
    BlockchainNetworks["bscTestNetwork"] = "bscTestNetwork";
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
