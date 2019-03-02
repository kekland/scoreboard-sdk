import { Name } from "../../shared/name.model";
import { JudgeType } from "../judgeType.enum";

export interface JudgeAddRequestObject {
  name: Name;

  type: JudgeType
}

export interface JudgeAddResponseObject {
  id: string;
  username: string;
  password: string;
}

