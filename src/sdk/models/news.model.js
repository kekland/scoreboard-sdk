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
class NewsModel {
    editNews(data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield requester_service_1.post(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this.competitionId}/news/${this.id}`, NewsModel, data, token);
            return news;
        });
    }
    deleteNews(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield requester_service_1.del(`${scoreboard_sdk_1.scoreboardBaseUrl}/competition/${this.competitionId}/news/${this.id}`, null, token);
        });
    }
}
exports.NewsModel = NewsModel;
