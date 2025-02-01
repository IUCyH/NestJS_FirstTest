import { ResponseGetUserDto } from "../dto/user/response/response-get-user.dto";
import { CreateUserDTO } from "../dto/user/create-user.dto";
import { ResponseCreateUserDto } from "../dto/user/response/response-create-user.dto";

export interface IUserService {
    getUserWithEmail(uid: string): Promise<ResponseGetUserDto | null>;
    getUserWithOutEmail(uid: string): Promise<ResponseGetUserDto | null>;
    createUser(user: CreateUserDTO): Promise<ResponseCreateUserDto | null>;
}