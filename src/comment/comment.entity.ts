import { Board } from "src/board/board.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("comment_table")
export class Comment {
    @PrimaryGeneratedColumn()
    commentId: number;

    @ManyToOne(() => User)
    commentUser: User;

    @ManyToOne(() => Board)
    commentBoard: Board;

    @UpdateDateColumn()
    commentDate: Date;  
    
    @Column()
    commentUserName: string;
}