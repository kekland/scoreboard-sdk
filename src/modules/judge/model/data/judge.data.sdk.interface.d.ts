import { JudgeType } from '../judgeType.enum';
import { IName } from '../../../../shared/model/shared.sdk.interface';
export interface IJudgeAddRequestObject {
    name: IName;
    type: JudgeType;
}
export interface IJudgeEditRequestObject {
    name?: IName;
}
