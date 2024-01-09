import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity("user_table")
@Unique(['userId'])
export class User {
    @PrimaryColumn()
    memberId : string;

    @Column()
    userId : string;

    @Column()
    userInfo : string;

    @Column()
    userName : string;

    @Column()
    userEmail : string;

    @Column()
    userRoles : string;
}