import { Exclude } from "class-transformer";
import { Column, Entity, Exclusion, PrimaryColumn, Unique } from "typeorm";

@Entity("user_table")
@Unique(['user_id'])
export class User {
    @PrimaryColumn()
    member_id : string;

    @Column()
    user_id : string;

    
    @Column()
    user_info : string;

    @Column()
    user_name : string;

    @Column()
    user_email : string;

    @Column()
    user_roles : string;
}