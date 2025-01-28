import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenPayload } from "../types/tokenPayload";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    generateAccessToken(payload: TokenPayload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
}