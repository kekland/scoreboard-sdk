import { IJudgeEditRequestObject } from '../../modules/judge/model/data/judge.data.sdk.interface';
import { IJudge } from '../../modules/judge/model/judge.sdk.interface';
import { IName } from '../../shared/model/shared.sdk.interface';
import { JudgeType } from '../../modules/judge/model/judgeType.enum';
export declare class JudgeModel implements IJudge {
    id: string;
    competitionId: string;
    type: JudgeType;
    username: string;
    password: string;
    name: IName;
    token: string;
    editJudge(data: IJudgeEditRequestObject, token: string): Promise<JudgeModel>;
    deleteJudge(token: string): Promise<void>;
}
