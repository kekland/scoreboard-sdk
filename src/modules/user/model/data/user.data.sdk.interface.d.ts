import { Role } from '../role.enum';
import { IName } from '../../../../shared/model/shared.sdk.interface';
import { IJudgeSecure } from '../../../judge/model/judge.sdk.interface';
import { IUserSecure } from '../user.sdk.interface';
export interface IUserLoginRequestObject {
    username: string;
    password: string;
}
export interface IUserLoginResponseObject {
    token: string;
    user: IUserSecure;
}
export interface IJudgeLoginResponseObject {
    token: string;
    user: IJudgeSecure;
}
export interface ILoginResponseObject {
    type: string;
    data: IUserLoginResponseObject | IJudgeLoginResponseObject;
}
export interface IUserCreateRequestObject {
    username: string;
    email: string;
    password: string;
    role: Role;
    name: IName;
}
export interface IUserVerifyIdentityResponseObject {
    id: string;
}
