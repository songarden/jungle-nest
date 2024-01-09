import { instanceToPlain } from "class-transformer";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("board_table")
export class Board {
    @PrimaryGeneratedColumn()
    board_id: number;

    @Column()
    board_name: string;

    @Column()
    board_content: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'board_user'})
    board_user: User;

    @CreateDateColumn({ 
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    })
    board_date: Date;
}