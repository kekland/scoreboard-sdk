"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_class_1 = require("../../../database/model.class");
class Verification extends model_class_1.DatabaseModel {
    constructor(userId, imageId) {
        super();
        this.userId = userId;
        this.imagePath = imageId;
    }
}
exports.Verification = Verification;
class VerificationDetailed extends model_class_1.Model {
    constructor(data) {
        super();
        this._id = data._id;
        this.userId = data.userId;
        this.imagePath = data.imagePath;
    }
}
exports.VerificationDetailed = VerificationDetailed;
