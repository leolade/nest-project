import {Injectable} from "@nestjs/common";
import {BookRepositoryService} from "../services/repositories/book-repository.service";
import {from, Observable} from "rxjs";
import {Book} from "../schemas/book";
import {map} from "rxjs/operators";
import {BookDtoMapperService} from "../dto/book-dto-mapper-service";
import {BookDto} from "../dto/commons.dto";

@Injectable()
export class BookFacadeService {
    constructor(
        private bookRepositoryService: BookRepositoryService,
        private bookDtoMapperService: BookDtoMapperService,
    ) {
    }

    getAllBooks(): Observable<BookDto[]> {
        return from(this.bookRepositoryService.getAllBooks()).pipe(
            map((books: Book[]) => books.map((book: Book) => this.bookDtoMapperService.fromSchema(book)))
        );
    }

    getBook(id: number): Observable<BookDto> {
        return from(this.bookRepositoryService.getBook(id)).pipe(
            map((book: Book) => this.bookDtoMapperService.fromSchema(book))
        );
    }

    async addBook(bookDto: BookDto): Promise<void> {
        let book: Book;
        if (bookDto.id) {
            const b: Book = await this.bookRepositoryService.getBook(1)
        }
        this.bookRepositoryService.addBook(this.bookDtoMapperService.toSchema(bookDto, book));
    }
}
