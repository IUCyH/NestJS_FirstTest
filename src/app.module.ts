import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./configs/orm.config";
import { UserModule } from "./modules/user.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forRoot(AppDataSource),
        JwtModule.register({
            secret: "Lg24_8TrFZ_wvKZ5N2Qj8J9VpXcTQoYmFqL1X9RYsMzlRmtvOaq6UHpQkE3VMTX",
            signOptions: { issuer: "IUCyH", expiresIn: "30m" }
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}