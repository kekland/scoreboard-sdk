"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_class_1 = require("../../../database/model.class");
const bcrypt_1 = require("bcrypt");
class User extends model_class_1.DatabaseModel {
    constructor(data) {
        super();
        if (data == null) {
            return;
        }
        this.username = data.username;
        this.email = data.email;
        this.hash = bcrypt_1.hashSync(data.password, bcrypt_1.genSaltSync(10));
        this.role = data.role;
        this.name = data.name;
        this.verified = false;
    }
}
exports.User = User;
class UserSecure extends model_class_1.Model {
    constructor(data) {
        super();
        if (data == null) {
            return;
        }
        this._id = data._id;
        this.email = data.email;
        this.name = data.name;
        this.role = data.role;
        this.verified = data.verified;
    }
}
exports.UserSecure = UserSecure;
class UserForAdminSecure extends model_class_1.Model {
    constructor(data) {
        super();
        if (data == null) {
            return;
        }
        this._id = data._id;
        this.username = data.username;
        this.email = data.email;
        this.role = data.role;
        this.name = data.name;
        this.verified = data.verified;
    }
}
exports.UserForAdminSecure = UserForAdminSecure;
