import { JudgeModel } from './judge.model';
import { IUserLoginRequestObject, IUserLoginResponseObject, IUserCreateRequestObject } from '../../modules/user/model/data/user.data.sdk.interface';
import { IUserSecure } from '../../modules/user/model/user.sdk.interface';
import { Role } from '../../modules/user/model/role.enum';
import { IName } from '../../shared/model/shared.sdk.interface';
import { IJudgeSecure } from '../../modules/judge/model/judge.sdk.interface';
export declare class UserModel implements IUserSecure {
    _id: string;
    email: string;
    name: IName;
    role: Role;
    verified: boolean;
    token: string;
    private static _login;
    static isUserModel(model: IUserSecure | IJudgeSecure): model is IUserSecure;
    static login(data: IUserLoginRequestObject): Promise<{
        isUser: boolean;
        data: UserModel | JudgeModel;
    }>;
    static register(data: IUserCreateRequestObject): Promise<IUserLoginResponseObject>;
    getData(): Promise<IUserSecure>;
}
