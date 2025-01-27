import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./configs/orm.config";
import { UserModule } from "./modules/user.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [
        TypeOrmModule.forRoot(AppDataSource),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}