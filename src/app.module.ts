import { Module } from '@nestjs/common';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Board } from './board/board.entity';
import { Comment } from './comment/comment.entity';


@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          database: configService.get('DB_DATABASE'),
          password: configService.get('DB_PASSWORD'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
    TypeOrmModule.forFeature([User,Board,Comment]),
    BoardModule,
    AuthModule,
    CommentModule,
    UserModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
