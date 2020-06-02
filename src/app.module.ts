import {Module} from '@nestjs/common';
import {CommonsModule} from './commons/commons.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/local'), CommonsModule],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor() {
    }
}
