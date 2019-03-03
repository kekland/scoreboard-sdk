"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_class_1 = require("../../../database/model.class");
const competitionStatus_enum_1 = require("./competitionStatus.enum");
class Competition extends model_class_1.DatabaseModel {
    constructor(data, user) {
        super();
        if (data == null) {
            return;
        }
        this.title = data.title;
        this.subject = data.subject;
        this.grade = data.grade;
        this.date = data.date;
        this.rounds = data.rounds;
        this.competitors = [];
        this.judges = [];
        this.organizerId = user._id;
        this.status = competitionStatus_enum_1.CompetitionStatus.Editing;
    }
}
exports.Competition = Competition;
class CompetitionDetailed extends model_class_1.Model {
    constructor(data) {
        super();
        this._id = data._id;
        this.title = data.title;
        this.subject = data.subject;
        this.grade = data.grade;
        this.date = data.date;
        this.rounds = data.rounds;
        this.competitors = { count: data.competitors.length };
        this.judges = { count: data.judges.length };
        this.news = { count: data.news.length };
        this.organizerId = data.organizerId;
        this.status = data.status;
    }
}
exports.CompetitionDetailed = CompetitionDetailed;
class CompetitionSecure extends model_class_1.Model {
    constructor(data) {
        super();
        if (data == null) {
            return;
        }
        this._id = data._id;
        this.title = data.title;
        this.subject = data.subject;
        this.grade = data.grade;
        this.date = data.date;
        this.rounds = data.rounds;
        this.competitors = { count: data.competitors.length };
        this.judges = { count: data.judges.length };
        this.news = { count: data.news.length };
        this.organizerId = data.organizerId;
        this.status = data.status;
    }
}
exports.CompetitionSecure = CompetitionSecure;
class CompetitionMinimalSecure extends model_class_1.Model {
    constructor(data) {
        super();
        this._id = data._id;
        this.title = data.title;
        this.subject = data.subject;
        this.grade = data.grade;
        this.date = data.date;
        this.rounds = data.rounds;
        this.organizerId = data.organizerId;
        this.status = data.status;
    }
}
exports.CompetitionMinimalSecure = CompetitionMinimalSecure;
