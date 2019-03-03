"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name_model_1 = require("../../../shared/model/name.model");
const utils_1 = require("../../../shared/utils");
class CompetitionNewsObject {
    static create(id, competitionId, data, author) {
        const news = new CompetitionNewsObject();
        news.id = id;
        news.title = data.title;
        news.body = data.body;
        if (author == null) {
            news.authorId = null;
            news.authorName = new name_model_1.Name({ first: 'Anonymous', last: 'Author' });
        }
        else if (utils_1.isUserNotJudge(author)) {
            news.authorId = author._id;
            news.authorName = author.name;
        }
        else {
            news.authorId = author.id;
            news.authorName = author.name;
        }
        return news;
    }
}
exports.CompetitionNewsObject = CompetitionNewsObject;
