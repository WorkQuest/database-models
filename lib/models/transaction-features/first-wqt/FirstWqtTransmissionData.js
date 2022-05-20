"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstWqtTransmissionData = exports.TransmissionStatusFirstWqt = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const SwapUsdtSwapTokenEvent_1 = require("../../SwapUsdt/SwapUsdtSwapTokenEvent");
var TransmissionStatusFirstWqt;
(function (TransmissionStatusFirstWqt) {
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["UnknownError"] = -3] = "UnknownError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["BroadcastError"] = -2] = "BroadcastError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["TransactionError"] = -1] = "TransactionError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["Pending"] = 0] = "Pending";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["Success"] = 1] = "Success";
})(TransmissionStatusFirstWqt = exports.TransmissionStatusFirstWqt || (exports.TransmissionStatusFirstWqt = {}));
let FirstWqtTransmissionData = class FirstWqtTransmissionData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "transactionHashTransmissionWqt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SwapUsdtSwapTokenEvent_1.SwapUsdtSwapTokenEvent),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "txHashSwapInitialized", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FirstWqtTransmissionData.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "error", void 0);
FirstWqtTransmissionData = __decorate([
    sequelize_typescript_1.Table
], FirstWqtTransmissionData);
exports.FirstWqtTransmissionData = FirstWqtTransmissionData;
