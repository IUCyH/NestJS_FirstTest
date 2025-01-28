import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 32 })
    uid: string = "";

    @Column("varchar", { length: 128 })
    name: string = "";

    @Column("varchar", { length: 128 })
    email: string = "";

    @Column("varchar", { length: 32 })
    password: string = "";
}