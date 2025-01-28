import {
    Controller,
    Post
} from "@nestjs/common";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post("access-token") // TODO: refresh token 검증 guard 생성
    generateAccessToken() {

    }
}