import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardController {
    constructor(private boardsService: BoardService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Get('/:id')
    getBoardByPath(@Path): Board {
        return this.boardsService.getBoard(id);
    }

    // 여러 파라미터를 받을때는 @Param() params: string[]

    @Get('/:id')
    getBoardByParam(@Param('id') id: string): Board{
        return this.boardsService.getBoard(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    @Patch('/:id')
    updateBoard(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto): Board{
        return this.boardsService.updateBoard(id,updateBoardDto);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardsService.deleteBoard(id);
    }
    
}
