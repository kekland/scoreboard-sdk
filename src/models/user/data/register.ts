import { Role } from "../role.enum";
import { Name } from "../../shared/name.model";

export interface UserCreateRequestObject {
  username: string;

  email: string;

  password: string;

  role: Role;

  name: Name;
}

