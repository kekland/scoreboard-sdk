
export interface IToken {
  isJudgeToken: boolean;
}
export interface IUserTokenPayloadData extends IToken {
  id: string;
}

export interface IJudgeTokenPayloadData extends IToken {
  judgeId: string;
  competitionId: string;
}

