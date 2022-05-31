"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapUsdtStatus = exports.SwapUsdtEvents = void 0;
var SwapUsdtEvents;
(function (SwapUsdtEvents) {
    SwapUsdtEvents["swapInitialized"] = "SwapInitialized";
})(SwapUsdtEvents = exports.SwapUsdtEvents || (exports.SwapUsdtEvents = {}));
var swapUsdtStatus;
(function (swapUsdtStatus) {
    swapUsdtStatus["SwapCreated"] = "SwapCreated";
    swapUsdtStatus["SwapProcessed"] = "SwapProcessed";
    swapUsdtStatus["SwapCompleted"] = "SwapCompleted";
    swapUsdtStatus["SwapError"] = "SwapError";
})(swapUsdtStatus = exports.swapUsdtStatus || (exports.swapUsdtStatus = {}));
