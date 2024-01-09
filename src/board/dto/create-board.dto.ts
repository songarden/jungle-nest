import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    boardName: string;

    @IsNotEmpty()
    boardContent: string;
}