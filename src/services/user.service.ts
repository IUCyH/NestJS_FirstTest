import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
                private readonly repository: Repository<User>
    ) {}

    async getUser(uid: string) {
        const result = await this.repository.findOne({
            where: { uid: uid }
        });
        return result;
    }

    async createUser(user: CreateUserDto): Promise<string | null> {
        const result = await this.repository
            .createQueryBuilder("user")
            .insert()
            .into(User, ["name", "email"])
            .values(user)
            .returning("uid")
            .execute();
        if(result.raw === 0) {
            return null;
        }

        return result.raw[0].uid;
    }
}