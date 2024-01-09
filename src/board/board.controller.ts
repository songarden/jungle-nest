import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';

@Controller('boards')
@UseInterceptors(ClassSerializerInterceptor)
export class BoardController {
    constructor(private boardsService: BoardService) {}

    @Get()
    getAllBoard(): Promise<Board[]> {
        return this.boardsService.getAllBoards();
    }

    // @Get('/:id')
    // getBoardByPath(@Path): Board {
    //     return this.boardsService.getBoard(id);
    // }

    // 여러 파라미터를 받을때는 @Param() params: string[]

    @Get('/:id')
    getBoardByParam(@Param('id') id: number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    @Post('/:id')
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto,
                @Param('id') userId: string): Promise<Board>{
        return this.boardsService.createBoard(createBoardDto,userId);
    }

    @Patch('/:id')
    updateBoard(@Param('id') id: number, @Body() updateBoardDto: UpdateBoardDto): Promise<Board>{
        return this.boardsService.updateBoard(id,updateBoardDto);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.boardsService.deleteBoard(id);
    }
    
}
