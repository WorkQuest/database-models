"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors;
(function (Errors) {
    Errors[Errors["InvalidPayload"] = 400000] = "InvalidPayload";
    Errors[Errors["UnconfirmedUser"] = 400001] = "UnconfirmedUser";
    Errors[Errors["InvalidRole"] = 400002] = "InvalidRole";
    Errors[Errors["InvalidStatus"] = 400003] = "InvalidStatus";
    Errors[Errors["AlreadyAnswer"] = 400004] = "AlreadyAnswer";
    Errors[Errors["KYCAlreadyVerified"] = 400005] = "KYCAlreadyVerified";
    Errors[Errors["KYCRequired"] = 400006] = "KYCRequired";
    Errors[Errors["InvalidEmail"] = 400005] = "InvalidEmail";
    Errors[Errors["InvalidActiveStatusTOTP"] = 400006] = "InvalidActiveStatusTOTP";
    Errors[Errors["InvalidTOTP"] = 400007] = "InvalidTOTP";
    Errors[Errors["UserAlreadyConfirmed"] = 400008] = "UserAlreadyConfirmed";
    Errors[Errors["TokenExpired"] = 401001] = "TokenExpired";
    Errors[Errors["TokenInvalid"] = 401002] = "TokenInvalid";
    Errors[Errors["SessionNotFound"] = 401003] = "SessionNotFound";
    Errors[Errors["Forbidden"] = 403000] = "Forbidden";
    Errors[Errors["NotFound"] = 404000] = "NotFound";
    Errors[Errors["SumSubError"] = 409001] = "SumSubError";
})(Errors = exports.Errors || (exports.Errors = {}));
//# sourceMappingURL=errors.js.map