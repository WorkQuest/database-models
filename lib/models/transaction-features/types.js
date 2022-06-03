"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["UnknownError"] = -3] = "UnknownError";
    TransactionStatus[TransactionStatus["BroadcastError"] = -2] = "BroadcastError";
    TransactionStatus[TransactionStatus["TransactionError"] = -1] = "TransactionError";
    TransactionStatus[TransactionStatus["Pending"] = 0] = "Pending";
    TransactionStatus[TransactionStatus["InProcess"] = 1] = "InProcess";
    TransactionStatus[TransactionStatus["Success"] = 2] = "Success";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
