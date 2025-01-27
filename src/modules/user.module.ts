import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { User } from "../entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: "Lg24_8TrFZ_wvKZ5N2Qj8J9VpXcTQoYmFqL1X9RYsMzlRmtvOaq6UHpQkE3VMTX",
            signOptions: { issuer: "IUCyH", expiresIn: "30m" }
        })
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}