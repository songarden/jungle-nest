import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/user/user.entity';
import { Comment } from 'src/comment/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board, User, Comment])
  ],
  controllers: [BoardController],
  providers: [BoardService, UserService],
  // exports: [BoardService, TypeOrmModule],
})
export class BoardModule {}
