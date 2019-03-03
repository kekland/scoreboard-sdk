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
class JudgeModel {
    editJudge(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const judge = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this.competitionId}/judge/${this.id}`, JudgeModel, data, token);
            return judge;
        });
    }
    deleteJudge(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield requester_service_1.del(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this.competitionId}/judge/${this.id}`, JudgeModel, token);
        });
    }
}
exports.JudgeModel = JudgeModel;
