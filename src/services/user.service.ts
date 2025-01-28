import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDTO } from "../dto/user/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
                private readonly repository: Repository<User>
    ) {}

    async getUser(uid: string) {
        const result = await this.repository.findOne({
            where: { uid: uid },
            select: ["uid", "name", "email"]
        });
        return result;
    }

    async createUser(user: CreateUserDTO): Promise<string | null> {
        const result = await this.repository
            .createQueryBuilder("user")
            .insert()
            .into(User, ["name", "email", "password"])
            .values(user)
            .returning("uid")
            .execute();
        if(result.raw === 0) {
            return null;
        }

        return result.raw[0].uid;
    }
}