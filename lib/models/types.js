"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainNetworks = exports.WorkPlace = exports.Priority = void 0;
var BlockchainNetworks;
(function (BlockchainNetworks) {
    BlockchainNetworks["bscMainNetwork"] = "bscMainNetwork";
    BlockchainNetworks["ethMainNetwork"] = "ethMainNetwork";
    BlockchainNetworks["rinkebyTestNetwork"] = "rinkebyTestNetwork";
    BlockchainNetworks["bscTestNetwork"] = "bscTestNetwork";
})(BlockchainNetworks || (BlockchainNetworks = {}));
exports.BlockchainNetworks = BlockchainNetworks;
var WorkPlace;
(function (WorkPlace) {
    WorkPlace["Distant"] = "distant";
    WorkPlace["Office"] = "office";
    WorkPlace["Both"] = "both";
})(WorkPlace || (WorkPlace = {}));
exports.WorkPlace = WorkPlace;
var Priority;
(function (Priority) {
    Priority[Priority["AllPriority"] = 0] = "AllPriority";
    Priority[Priority["FixedDelivery"] = 1] = "FixedDelivery";
    Priority[Priority["ShortTerm"] = 2] = "ShortTerm";
    Priority[Priority["Urgent"] = 3] = "Urgent";
})(Priority || (Priority = {}));
exports.Priority = Priority;
