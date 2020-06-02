import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Book} from "../schemas/book";
import {BookRepositoryService} from "../services/repositories/book-repository.service";
@Controller('')
export class BookController {
    constructor(
        private bookRepositoryService: BookRepositoryService,
        ) {

    }

    @Get('books')
    allBooks(): Promise<Book[]> {
        return this.bookRepositoryService.getAllBooks();
    }

    @Get('/book/:id')
    getBook(@Param('id') id: number): Promise<Book> {
        return this.bookRepositoryService.getBook(id);
    }

    @Post('/book')
    addBook(@Body() book: Book): void {
        return this.bookRepositoryService.addBook(book);
    }

}
