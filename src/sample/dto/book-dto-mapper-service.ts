import {Book} from "../schemas/book";
import {BookDto} from "./commons.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";

@Injectable()
export class BookDtoMapperService {

    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>) {
    }

    fromSchema(book: Book): BookDto {
        const dto = new BookDto()
        dto.author = book.author;
        dto.title = book.title;
        dto.id = book.id;
        return dto;
    }

    fromDTO(book: BookDto): BookDto {
        const dto = new BookDto()
        dto.author = book.author;
        dto.title = book.title;
        dto.id = book.id;
        return dto;
    }

    toSchema(bookDto: BookDto, book: Book): Book {
        if (!book) {
            book = new this.bookModel();
        }
        book.author = bookDto.author;
        book.title = bookDto.title;
        return book;
    }
}
