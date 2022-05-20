"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstWqtTransmissionData = exports.TransmissionStatusFirstWqt = void 0;
const Transaction_1 = require("../Transaction");
const BridgeSwapUsdtTokenEvent_1 = require("../../bridge-usdt/BridgeSwapUsdtTokenEvent");
const sequelize_typescript_1 = require("sequelize-typescript");
var TransmissionStatusFirstWqt;
(function (TransmissionStatusFirstWqt) {
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["UnknownError"] = -3] = "UnknownError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["BroadcastError"] = -2] = "BroadcastError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["TransactionError"] = -1] = "TransactionError";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["Pending"] = 0] = "Pending";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["InProcess"] = 1] = "InProcess";
    TransmissionStatusFirstWqt[TransmissionStatusFirstWqt["Success"] = 2] = "Success";
})(TransmissionStatusFirstWqt = exports.TransmissionStatusFirstWqt || (exports.TransmissionStatusFirstWqt = {}));
let FirstWqtTransmissionData = class FirstWqtTransmissionData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Transaction_1.Transaction),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "transactionHashTransmissionWqt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => BridgeSwapUsdtTokenEvent_1.BridgeSwapUsdtTokenEvent),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "txHashSwapInitialized", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], FirstWqtTransmissionData.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], FirstWqtTransmissionData.prototype, "error", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Transaction_1.Transaction)
], FirstWqtTransmissionData.prototype, "tx", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => BridgeSwapUsdtTokenEvent_1.BridgeSwapUsdtTokenEvent)
], FirstWqtTransmissionData.prototype, "bridgeEvent", void 0);
FirstWqtTransmissionData = __decorate([
    sequelize_typescript_1.Table
], FirstWqtTransmissionData);
exports.FirstWqtTransmissionData = FirstWqtTransmissionData;
