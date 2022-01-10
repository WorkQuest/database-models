"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestsResponseType = exports.QuestsResponseStatus = exports.QuestStatus = exports.QuestEmployment = exports.AdType = void 0;
var AdType;
(function (AdType) {
    AdType[AdType["Free"] = 0] = "Free";
    AdType[AdType["Paid"] = 1] = "Paid";
})(AdType = exports.AdType || (exports.AdType = {}));
var QuestEmployment;
(function (QuestEmployment) {
    QuestEmployment["FullTime"] = "fullTime";
    QuestEmployment["PartTime"] = "partTime";
    QuestEmployment["FixedTerm"] = "fixedTerm";
})(QuestEmployment = exports.QuestEmployment || (exports.QuestEmployment = {}));
var QuestStatus;
(function (QuestStatus) {
    QuestStatus[QuestStatus["Created"] = 0] = "Created";
    QuestStatus[QuestStatus["Active"] = 1] = "Active";
    QuestStatus[QuestStatus["Closed"] = 2] = "Closed";
    QuestStatus[QuestStatus["Dispute"] = 3] = "Dispute";
    QuestStatus[QuestStatus["WaitWorker"] = 4] = "WaitWorker";
    QuestStatus[QuestStatus["WaitConfirm"] = 5] = "WaitConfirm";
    QuestStatus[QuestStatus["Done"] = 6] = "Done";
})(QuestStatus = exports.QuestStatus || (exports.QuestStatus = {}));
var QuestsResponseStatus;
(function (QuestsResponseStatus) {
    QuestsResponseStatus[QuestsResponseStatus["Rejected"] = -1] = "Rejected";
    QuestsResponseStatus[QuestsResponseStatus["Open"] = 0] = "Open";
    QuestsResponseStatus[QuestsResponseStatus["Accepted"] = 1] = "Accepted";
    QuestsResponseStatus[QuestsResponseStatus["Closed"] = 2] = "Closed";
})(QuestsResponseStatus = exports.QuestsResponseStatus || (exports.QuestsResponseStatus = {}));
var QuestsResponseType;
(function (QuestsResponseType) {
    QuestsResponseType[QuestsResponseType["Response"] = 0] = "Response";
    QuestsResponseType[QuestsResponseType["Invite"] = 1] = "Invite";
})(QuestsResponseType = exports.QuestsResponseType || (exports.QuestsResponseType = {}));
