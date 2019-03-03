import { Model } from '../../../database/model.class';
import { Role } from './role.enum';
import { IName } from '../../../shared/model/shared.sdk.interface';
export interface IUserSecure extends Model {
    email: string;
    name: IName;
    role: Role;
    verified: boolean;
}
export interface IUserForAdminSecure extends Model {
    username: string;
    email: string;
    name: IName;
    role: Role;
    verified: boolean;
}
