import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Comment } from 'src/comment/comment.entity';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ){}
    


    async getAllBoards() : Promise<Board[]>{
        return await this.boardRepository.find({
            relations: ['board_user']})
        
    }

    // getBoard(id: string) {
    //     const found = this.boards.find((board) => board.boardId  === id);

    //     if(!found) {
    //         throw new NotFoundException(`Con't find Board with id ${id}`);
    //     }

    //     return found;
    // }

    async getBoardById(boardId : number): Promise <Board> {
        const found = await this.boardRepository.findOne({where : {board_id:boardId}});
        
        if(!found) {
            throw new NotFoundException(`Con't find Board with id ${boardId}`);
        }

        return found;

    }

    async createBoard(createBoardDto: CreateBoardDto, userId: string): Promise <Board> {
        const {boardName, boardContent} = createBoardDto;
        const user = await this.userRepository.findOne({where: {member_id : userId}});
        if(!user) {
            throw new NotFoundException(`Can't find user with ${userId}`);
        }
        const currentDateTime = new Date();
        const board = this.boardRepository.create({
            board_name : boardName,
            board_content : boardContent,
            board_user : user,
            board_date : currentDateTime
        })

        await this.boardRepository.save(board);
        return board;
    }

    async updateBoard(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
        await this.boardRepository.update(id, updateBoardDto);
        return this.boardRepository.findOne({ where: { board_id : id}});
    }

    async deleteBoard(id: number): Promise<void>{
        const result = await this.boardRepository.delete(id);
        
        console.log('result', result);
    }
}
