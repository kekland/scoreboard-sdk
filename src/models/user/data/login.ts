import { UserSecure, User } from "../user.model";
import { JudgeSecure, Judge } from "../../judge/judge.model";

export interface UserLoginRequestObject {
  username: string;

  password: string;
}

export interface UserLoginResponseObject {
  token: string;
  user: UserSecure;
}

export interface JudgeLoginRequestObject {
  username: string;

  password: string;
}

export interface JudgeLoginResponseObject {
  token: string;
  user: JudgeSecure;
}

export interface LoginResponseObject {
  type: string;
  data: UserLoginResponseObject | JudgeLoginResponseObject;
}

