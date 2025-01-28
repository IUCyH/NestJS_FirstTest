import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { ResponseGetUserDto } from "../dto/user/response/response-get-user.dto";
import { ResponseCreateUserDto } from "../dto/user/response/response-create-user.dto";
import { CreateUserDTO } from "../dto/user/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
                private readonly repository: Repository<User>
    ) {}

    async getUserWithEmail(uid: string) {
        const user = await this.repository.findOne({
            where: { uid: uid },
            select: ["uid", "name", "email"]
        });

        const result = plainToInstance(ResponseGetUserDto, user, {
            groups: ["includeEmail"]
        });
        return result;
    }

    async getUserWithOutEmail(uid: string) {
        const user = await this.repository.findOne({
            where: { uid: uid },
            select: ["uid", "name"]
        });

        const result = plainToInstance(ResponseGetUserDto, user);
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

        const result = plainToInstance(ResponseCreateUserDto, users.raw[0]);
        return result;
    }
}