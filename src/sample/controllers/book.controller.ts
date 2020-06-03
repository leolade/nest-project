import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BookFacadeService} from "../facades/book-facade.service";
import {Observable} from "rxjs";
import {BookDto} from "../dto/commons.dto";

@Controller('')
export class BookController {
    constructor(
        private bookFacadeService: BookFacadeService,
    ) {

    }

    @Get('books')
    allBooks(): Observable<BookDto[]> {
        return this.bookFacadeService.getAllBooks();
    }

    @Get('/book/:id')
    getBook(@Param('id') id: number): Observable<BookDto> {
        return this.bookFacadeService.getBook(id);
    }

    @Post('/book')
    addBook(@Body() book: BookDto): void {
        this.bookFacadeService.addBook(book);
    }

}
