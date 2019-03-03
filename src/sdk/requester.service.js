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
const __axios = require("axios");
const class_transformer_1 = require("class-transformer");
const axios = __axios.default;
exports.get = (url, type, params = {}, bearer) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield axios.get(url, {
            params,
            headers: {
                authorization: `Bearer ${bearer}`,
            },
        });
        let responseData = response.data;
        if (type !== null) {
            responseData = class_transformer_1.plainToClass(type, responseData);
        }
        return responseData;
    }
    catch (e) {
        if (e.response == null || isEmpty(e.response.data)) {
            throw e;
        }
        throw e.response.data;
    }
});
exports.getPaginated = (url, type, params, bearer) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield axios.get(url, {
            params,
            headers: {
                authorization: `Bearer ${bearer}`,
            },
        });
        const responseData = response.data;
        const items = class_transformer_1.plainToClass(type, responseData.items);
        return { total: responseData.total, items, count: items.length };
    }
    catch (e) {
        if (e.response == null || isEmpty(e.response.data)) {
            throw e;
        }
        throw e.response.data;
    }
});
const baseRequest = (method, url, type, body, bearer) => __awaiter(this, void 0, void 0, function* () {
    try {
        let response = null;
        const cfg = {
            headers: {
                Authorization: `Bearer ${bearer}`,
            },
        };
        if (method === RequestMethod.POST) {
            response = yield axios.post(url, body, cfg);
        }
        else if (method === RequestMethod.PUT) {
            response = yield axios.put(url, body, cfg);
        }
        else if (method === RequestMethod.DELETE) {
            response = yield axios.delete(url, cfg);
        }
        let responseData = response.data;
        if (type !== null) {
            responseData = class_transformer_1.plainToClass(type, responseData);
        }
        return responseData;
    }
    catch (e) {
        if (e.response == null || isEmpty(e.response.data)) {
            throw e;
        }
        throw e.response.data;
    }
});
exports.post = (url, type, body, bearer) => __awaiter(this, void 0, void 0, function* () {
    const data = yield baseRequest(RequestMethod.POST, url, type, body, bearer);
    return data;
});
exports.put = (url, type, body, bearer) => __awaiter(this, void 0, void 0, function* () {
    const data = yield baseRequest(RequestMethod.PUT, url, type, body, bearer);
    return data;
});
exports.del = (url, type, bearer) => __awaiter(this, void 0, void 0, function* () {
    const data = yield baseRequest(RequestMethod.DELETE, url, type, {}, bearer);
    return data;
});
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["POST"] = 0] = "POST";
    RequestMethod[RequestMethod["PUT"] = 1] = "PUT";
    RequestMethod[RequestMethod["DELETE"] = 2] = "DELETE";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
const isEmpty = (value) => {
    return value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);
};
