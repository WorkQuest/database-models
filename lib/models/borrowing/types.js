"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowingStatus = void 0;
var BorrowingStatus;
(function (BorrowingStatus) {
    BorrowingStatus[BorrowingStatus["Pending"] = 0] = "Pending";
    BorrowingStatus[BorrowingStatus["Active"] = 1] = "Active";
    BorrowingStatus[BorrowingStatus["Closed"] = 2] = "Closed";
    BorrowingStatus[BorrowingStatus["Unpaid"] = 3] = "Unpaid";
})(BorrowingStatus = exports.BorrowingStatus || (exports.BorrowingStatus = {}));
