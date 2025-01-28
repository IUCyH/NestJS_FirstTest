import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { AuthSharedModule } from "../shared/auth-shared.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthSharedModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}