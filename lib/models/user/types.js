"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStatus = exports.StatusKYC = exports.UserRole = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Unconfirmed"] = 0] = "Unconfirmed";
    UserStatus[UserStatus["Confirmed"] = 1] = "Confirmed";
    UserStatus[UserStatus["NeedSetRole"] = 2] = "NeedSetRole";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["Employer"] = "employer";
    UserRole["Worker"] = "worker";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var StatusKYC;
(function (StatusKYC) {
    StatusKYC[StatusKYC["Unconfirmed"] = 0] = "Unconfirmed";
    StatusKYC[StatusKYC["Confirmed"] = 1] = "Confirmed";
})(StatusKYC = exports.StatusKYC || (exports.StatusKYC = {}));
var RatingStatus;
(function (RatingStatus) {
    RatingStatus["noStatus"] = "noStatus";
    RatingStatus["verified"] = "verified";
    RatingStatus["reliable"] = "reliable";
    RatingStatus["topRanked"] = "topRanked";
})(RatingStatus = exports.RatingStatus || (exports.RatingStatus = {}));
