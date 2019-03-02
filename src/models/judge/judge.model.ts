import { Name } from "../shared/name.model";
import { JudgeType } from "./judgeType.enum";

export class JudgeSecure {
  id: string;
  name: Name;
  type: JudgeType;

  constructor(judge: Judge) {
    this.name = judge.name
    this.id = judge.id
    this.type = judge.type
  }
}

export class Judge {
  id: string;
  competitionId: string;
  type: JudgeType;
  username: string;
  password: string;
  name: Name;
  constructor(id: string, competitionId: string, type: JudgeType, username: string, password: string, name: Name) {
    this.id = id
    this.type = type
    this.competitionId = competitionId
    this.username = username
    this.password = password
    this.name = name
  }
}

