import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
    private boards: Board[] = [];

    getAllBoards() : Board[]{
        return this.boards;
    }

    getBoard(id: string) {
        const found = this.boards.find((board) => board.boardId  === id);

        if(!found) {
            throw new NotFoundException(`Con't find Board with id ${id}`);
        }

        return found;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const uuid = uuidv4();
        const {boardName, boardContent, boardUser} = createBoardDto;
        const board: Board = {
            boardId : uuid.replace(/-/g, ''),
            boardName,
            boardContent,
            boardUser,
            boardDate : "1"
        }

        this.boards.push(board);
        return board;
    }

    updateBoard(id: string, updateBoardDto: UpdateBoardDto): Board {
        const board = this.getBoard(id);
        const {boardName, boardContent} = updateBoardDto;
        board.boardName = boardName;
        board.boardContent = boardContent;

        return board;
    }

    deleteBoard(id: string): void{
        const found = this.getBoard(id);
        this.boards = this.boards.filter((board) => board.boardId !== found.boardId);
    }
}
