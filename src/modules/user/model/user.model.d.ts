import { Model, DatabaseModel } from '../../../database/model.class';
import { Name } from '../../../shared/model/name.model';
import { Role } from './role.enum';
import { UserCreateRequestObject } from './data/register';
export declare class User extends DatabaseModel {
    username: string;
    email: string;
    hash: string;
    name: Name;
    role: Role;
    verified: boolean;
    constructor(data: UserCreateRequestObject);
}
export declare class UserSecure extends Model {
    email: string;
    name: Name;
    role: Role;
    verified: boolean;
    constructor(data: User);
}
export declare class UserForAdminSecure extends Model {
    username: string;
    email: string;
    name: Name;
    role: Role;
    verified: boolean;
    constructor(data: User);
}
