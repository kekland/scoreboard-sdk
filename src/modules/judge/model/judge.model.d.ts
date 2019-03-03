import { Name } from '../../../shared/model/name.model';
import { JudgeType } from './judgeType.enum';
export declare class JudgeSecure {
    id: string;
    name: Name;
    type: JudgeType;
    competitionId: string;
    constructor(judge: Judge);
}
export declare class Judge {
    id: string;
    competitionId: string;
    type: JudgeType;
    username: string;
    password: string;
    name: Name;
    static create(id: string, competitionId: string, type: JudgeType, username: string, password: string, name: Name): Judge;
}
