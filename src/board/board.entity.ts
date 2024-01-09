import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Table, UpdateDateColumn } from "typeorm";

@Entity("board_table")
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    boardId: number;

    @Column()
    boardName: string;

    @Column()
    boardContent: string;

    @ManyToOne(() => User)
    boardUser: string;

    @UpdateDateColumn()
    boardDate: Date;
}