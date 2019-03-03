"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const requester_service_1 = require("../requester.service");
const scoreboard_sdk_1 = require("../scoreboard.sdk");
const judge_model_1 = require("./judge.model");
class UserModel {
    constructor() {
        this.token = '';
    }
    static _login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/user/login`, null, data);
            return response;
        });
    }
    static isUserModel(model) {
        return model.email !== undefined;
    }
    static login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield UserModel._login(data);
            if (UserModel.isUserModel(response.data.user)) {
                const model = new UserModel();
                model._id = response.data.user._id;
                model.email = response.data.user.email;
                model.name = response.data.user.name;
                model.role = response.data.user.role;
                model.token = response.data.token;
                model.verified = response.data.user.verified;
                return { isUser: true, data: model };
            }
            else {
                const model = new judge_model_1.JudgeModel();
                model.id = response.data.user.id;
                model.name = response.data.user.name;
                model.competitionId = response.data.user.competitionId;
                model.type = response.data.user.type;
                model.token = response.data.token;
                return { isUser: false, data: model };
            }
        });
    }
    static register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/user/register`, null, data);
            return response;
        });
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield requester_service_1.get(`${scoreboard_sdk_1.scoreboardBaseUrl}/user/`, null, {}, this.token);
            return response;
        });
    }
}
exports.UserModel = UserModel;
