"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompetitorResult {
    constructor(points) {
        this.points = points;
        this.total = 0;
        points.forEach(point => { this.total += point; });
    }
    static fromLength(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(0);
        }
        return new CompetitorResult(array);
    }
}
exports.CompetitorResult = CompetitorResult;
