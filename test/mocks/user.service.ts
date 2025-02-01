import { IUserService } from "../../src/user/interfaces/user-service.interface";
import { ResponseGetUserDto } from "../../src/user/dto/response/response-get-user.dto";
import { CreateUserDTO } from "../../src/user/dto/create-user.dto";
import { ResponseCreateUserDto } from "../../src/user/dto/response/response-create-user.dto";

export class MockUserService implements IUserService {
    getUserWithEmail(uid: string): Promise<ResponseGetUserDto | null> {
        const user = new ResponseGetUserDto(uid, "Lucy", "abc@abc.com");
        return Promise.resolve(user);
    }

    getUserWithOutEmail(uid: string): Promise<ResponseGetUserDto | null> {
        const user = new ResponseGetUserDto(uid, "Lucy");
        return Promise.resolve(user);
    }

    createUser(user: CreateUserDTO): Promise<ResponseCreateUserDto | null> {
        const newUser = new ResponseCreateUserDto("abc1234");
        return Promise.resolve(newUser);
    }
}