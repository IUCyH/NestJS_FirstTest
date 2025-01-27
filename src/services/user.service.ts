import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

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
}