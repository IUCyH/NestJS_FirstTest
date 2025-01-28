import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthSharedModule } from "../shared/auth-shared.module";
import { User } from "../entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthSharedModule
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}