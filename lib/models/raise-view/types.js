"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRaiseType = exports.UserRaiseDuration = exports.UserRaiseStatus = exports.QuestRaiseType = exports.QuestRaiseDuration = exports.QuestRaiseStatus = void 0;
var QuestRaiseStatus;
(function (QuestRaiseStatus) {
    QuestRaiseStatus[QuestRaiseStatus["Paid"] = 0] = "Paid";
    QuestRaiseStatus[QuestRaiseStatus["Closed"] = 1] = "Closed";
})(QuestRaiseStatus = exports.QuestRaiseStatus || (exports.QuestRaiseStatus = {}));
var QuestRaiseDuration;
(function (QuestRaiseDuration) {
    QuestRaiseDuration[QuestRaiseDuration["OneDay"] = 1] = "OneDay";
    QuestRaiseDuration[QuestRaiseDuration["FiveDays"] = 5] = "FiveDays";
    QuestRaiseDuration[QuestRaiseDuration["SevenDays"] = 7] = "SevenDays";
})(QuestRaiseDuration = exports.QuestRaiseDuration || (exports.QuestRaiseDuration = {}));
var QuestRaiseType;
(function (QuestRaiseType) {
    QuestRaiseType[QuestRaiseType["GoldPlus"] = 0] = "GoldPlus";
    QuestRaiseType[QuestRaiseType["Gold"] = 1] = "Gold";
    QuestRaiseType[QuestRaiseType["Silver"] = 2] = "Silver";
    QuestRaiseType[QuestRaiseType["Bronze"] = 3] = "Bronze";
})(QuestRaiseType = exports.QuestRaiseType || (exports.QuestRaiseType = {}));
var UserRaiseStatus;
(function (UserRaiseStatus) {
    UserRaiseStatus[UserRaiseStatus["Paid"] = 0] = "Paid";
    UserRaiseStatus[UserRaiseStatus["Closed"] = 1] = "Closed";
})(UserRaiseStatus = exports.UserRaiseStatus || (exports.UserRaiseStatus = {}));
var UserRaiseDuration;
(function (UserRaiseDuration) {
    UserRaiseDuration[UserRaiseDuration["OneDay"] = 1] = "OneDay";
    UserRaiseDuration[UserRaiseDuration["SevenDays"] = 7] = "SevenDays";
    UserRaiseDuration[UserRaiseDuration["ThirtyOneDays"] = 31] = "ThirtyOneDays";
})(UserRaiseDuration = exports.UserRaiseDuration || (exports.UserRaiseDuration = {}));
var UserRaiseType;
(function (UserRaiseType) {
    UserRaiseType[UserRaiseType["GoldPlus"] = 0] = "GoldPlus";
    UserRaiseType[UserRaiseType["Gold"] = 1] = "Gold";
    UserRaiseType[UserRaiseType["Silver"] = 2] = "Silver";
    UserRaiseType[UserRaiseType["Bronze"] = 3] = "Bronze";
})(UserRaiseType = exports.UserRaiseType || (exports.UserRaiseType = {}));
