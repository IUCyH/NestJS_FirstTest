import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ResponseGetUserDto } from "./dto/response-get-user.dto";
import { ResponseCreateUserDto } from "./dto/response-create-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { IUserService } from "./interfaces/user-service.interface";

@Injectable()
export class UserService implements IUserService {
    constructor(@InjectRepository(User)
                private readonly repository: Repository<User>
    ) {}

    async getUserWithEmail(uid: string) {
        const user = await this.repository.findOne({
            where: { uid: uid },
            select: ["uid", "name", "email"]
        });

        if(user == null) {
            return null;
        }

        const result = new ResponseGetUserDto(user.uid, user.name, user.email);
        return result;
    }

    async getUserWithOutEmail(uid: string) {
        const user = await this.repository.findOne({
            where: { uid: uid },
            select: ["uid", "name"]
        });

        if(user == null) {
            return null;
        }

        const result = new ResponseGetUserDto(user.uid, user.name);
        return result;
    }

    async createUser(user: CreateUserDTO) {
        const users = await this.repository
            .createQueryBuilder("user")
            .insert()
            .into(User, ["name", "email", "password"])
            .values(user)
            .returning("uid")
            .execute();
        if(users.raw === 0) {
            return null;
        }

        const result = new ResponseCreateUserDto(users.raw[0].uid);
        return result;
    }
}