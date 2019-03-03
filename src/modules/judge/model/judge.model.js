"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JudgeSecure {
    constructor(judge) {
        if (judge == null) {
            return;
        }
        this.name = judge.name;
        this.id = judge.id;
        this.type = judge.type;
        this.competitionId = judge.competitionId;
    }
}
exports.JudgeSecure = JudgeSecure;
class Judge {
    static create(id, competitionId, type, username, password, name) {
        const judge = new Judge();
        judge.id = id;
        judge.type = type;
        judge.competitionId = competitionId;
        judge.username = username;
        judge.password = password;
        judge.name = name;
        return judge;
    }
}
exports.Judge = Judge;
