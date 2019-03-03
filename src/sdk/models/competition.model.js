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
const competitor_model_1 = require("./competitor.model");
class CompetitionModel {
    static getCompetitions(pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const competitions = yield requester_service_1.getPaginated(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition`, CompetitionModel, pagination);
            return competitions;
        });
    }
    static getCompetition(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const competition = yield requester_service_1.get(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${id}`, CompetitionModel);
            return competition;
        });
    }
    static createCompetition(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competition = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition`, CompetitionModel, data, token);
            return competition;
        });
    }
    setCompetitionStatus(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competition = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/status`, CompetitionModel, data, token);
            return competition;
        });
    }
    editCompetition(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competition = yield requester_service_1.put(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}`, CompetitionModel, data, token);
            return competition;
        });
    }
    editCompetitionRounds(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competition = yield requester_service_1.put(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/rounds`, CompetitionModel, data, token);
            return competition;
        });
    }
    deleteCompetition(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield requester_service_1.del(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}`, CompetitionModel, token);
        });
    }
    getCompetitors(pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const competitors = yield requester_service_1.getPaginated(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/competitor`, competitor_model_1.CompetitorModel, pagination);
            return competitors;
        });
    }
    getCompetitorsDetailed(pagination, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competitors = yield requester_service_1.getPaginated(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/competitor/detailed`, competitor_model_1.CompetitorModel, pagination, token);
            return competitors;
        });
    }
    addCompetitor(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competitor = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/competitor`, competitor_model_1.CompetitorModel, data, token);
            return competitor;
        });
    }
    setCompetitorResult(cypherId, data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const competitor = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/competitor/${cypherId}/result`, null, data, token);
            return competitor;
        });
    }
    getJudges(pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const judges = yield requester_service_1.getPaginated(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/judge`, judge_model_1.JudgeModel, pagination);
            return judges;
        });
    }
    getJudgesDetailed(pagination, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const judges = yield requester_service_1.getPaginated(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/judge/detailed`, judge_model_1.JudgeModel, pagination, token);
            return judges;
        });
    }
    getJudge(judgeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const judge = yield requester_service_1.get(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/judge/${judgeId}`, judge_model_1.JudgeModel, {});
            return judge;
        });
    }
    addJudge(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const judge = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this._id}/judge`, judge_model_1.JudgeModel, data, token);
            return judge;
        });
    }
}
exports.CompetitionModel = CompetitionModel;
