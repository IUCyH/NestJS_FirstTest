import { Injectable } from "@nestjs/common";
import { TokenHelperService } from "../helpers/token-helper.service";
import { TokenPayload } from "../types/tokenPayload";

@Injectable()
export class AuthService {
    constructor(private readonly tokenHelperService: TokenHelperService) {}

    generateAccessToken(sub: string) {
        const payload: TokenPayload = { sub: sub, type: "access" };
        const token = this.tokenHelperService.generate(payload);
        return token;
    }
}