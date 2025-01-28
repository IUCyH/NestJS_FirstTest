import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TokenHelperService } from "../helpers/token-helper.service";
import { TokenPayload } from "../types/tokenPayload";
import { User } from "../entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
        private readonly tokenHelperService: TokenHelperService
    ) {}

    generateAccessToken(sub: string) {
        const payload: TokenPayload = { sub: sub, type: "access" };
        const token = this.tokenHelperService.generate(payload);
        return token;
    }

    generateRefreshToken(sub: string) {
        const payload: TokenPayload = { sub: sub, type: "refresh" };
        const token = this.tokenHelperService.generate(payload);
        return token;
    }

    async getUid(id: string, password: string) {
        const user = await this.repository.findOne({
            where: { email: id, password: password },
            select: ["uid"]
        });
        return user;
    }
}