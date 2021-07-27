"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = exports.Point = exports.Session = exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Session_1 = require("./Session");
const Point_1 = require("./Point");
var User_2 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_2.User; } });
var Session_2 = require("./Session");
Object.defineProperty(exports, "Session", { enumerable: true, get: function () { return Session_2.Session; } });
var Point_2 = require("./Point");
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return Point_2.Point; } });
function initDatabase(dbLink, logging = false, sync = false) {
    return __awaiter(this, void 0, void 0, function* () {
        let sequelize;
        sequelize = new sequelize_typescript_1.Sequelize(dbLink, {
            dialect: "postgres",
            models: [
                User_1.User,
                Session_1.Session,
                Point_1.Point,
            ],
            logging: logging,
        });
        if (sync)
            yield sequelize.sync();
        return { sequelize };
    });
}
exports.initDatabase = initDatabase;
