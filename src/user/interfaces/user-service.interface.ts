import { ResponseGetUserDto } from "../dto/response-get-user.dto";
import { CreateUserDTO } from "../dto/create-user.dto";
import { ResponseCreateUserDto } from "../dto/response-create-user.dto";

export const USER_SERVICE = "IUserService";

export interface IUserService {
    getUserWithEmail(uid: string): Promise<ResponseGetUserDto | null>;
    getUserWithOutEmail(uid: string): Promise<ResponseGetUserDto | null>;
    createUser(user: CreateUserDTO): Promise<ResponseCreateUserDto | null>;
}