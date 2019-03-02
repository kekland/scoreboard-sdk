import { Name } from "../shared/name.model";
import { Role } from "./role.enum";
import { UserCreateRequestObject } from "./data/register";
import { DatabaseModel, Model } from "../database/model.class";

export class User extends DatabaseModel {
  username: string;

  email: string;
  hash: string;

  name: Name;
  role: Role;

  verified: boolean;
}

export class UserSecure extends Model {
  email: string;
  name: Name;
  role: Role;
  verified: boolean;
}

