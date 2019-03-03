import { JudgeType } from './judgeType.enum';
import { IName } from '../../../shared/model/shared.sdk.interface';
export interface IJudgeSecure {
    id: string;
    name: IName;
    type: JudgeType;
    competitionId: string;
}
export interface IJudge {
    id: string;
    competitionId: string;
    type: JudgeType;
    username: string;
    password: string;
    name: IName;
}
