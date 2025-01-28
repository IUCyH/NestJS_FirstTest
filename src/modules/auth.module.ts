import { Module } from "@nestjs/common";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { AuthSharedModule } from "../shared/auth-shared.module";

@Module({
    imports: [
        AuthSharedModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}