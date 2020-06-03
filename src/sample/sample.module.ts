import {Module} from '@nestjs/common';
import {BookController} from "./controllers/book.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Book, BookSchema} from "./schemas/book";
import {BookRepositoryService} from "./services/repositories/book-repository.service";
import {BookFacadeService} from "./facades/book-facade.service";
import {BookDtoMapperService} from "./dto/book-dto-mapper-service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
    ],
    controllers: [BookController],
    providers: [BookRepositoryService, BookFacadeService, BookDtoMapperService],
})
export class SampleModule {
}
