import { Board } from "src/board/board.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("comment_table")
export class Commen {
    @PrimaryGeneratedColumn()
    commentId: number;

    @ManyToOne(() => User)
    commentUser: string;

    @ManyToOne(() => Board)
    commentBoard: number;

    @UpdateDateColumn()
    commentDate: Date;  
    
    @Column()
    commentUserName: string;
}