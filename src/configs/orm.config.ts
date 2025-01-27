import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const AppDataSource: TypeOrmModuleOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "bere6363",
    database: "nest_test",
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: [__dirname + "../../dist/entities/**/*.js"],
    subscribers: [],
    migrations: []
};