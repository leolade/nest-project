import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Book} from "../../schemas/book";
import {Model} from "mongoose";

@Injectable()
export class BookRepositoryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>) {
    }

    getAllBooks(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    getBook(id: number): Promise<Book> {
        return this.bookModel.findById(id).exec();
    }

    addBook(book: Book): void {
        new this.bookModel(book).save().then();
    }
}
