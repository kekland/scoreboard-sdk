"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_model_1 = require("../../competition/model/result.model");
class Competitor {
    static create(id, cypherToken, name, competitionId, location) {
        const competitor = new Competitor();
        competitor.name = name;
        competitor.location = location;
        competitor.competitionId = competitionId;
        competitor.result = new result_model_1.CompetitorResult([]);
        return competitor;
    }
}
exports.Competitor = Competitor;
class CompetitorSecure {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.location = data.location;
        this.competitionId = data.competitionId;
    }
}
exports.CompetitorSecure = CompetitorSecure;
class CompetitorWithResultsSecure {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.location = data.location;
        this.result = data.result;
        this.competitionId = data.competitionId;
    }
}
exports.CompetitorWithResultsSecure = CompetitorWithResultsSecure;
