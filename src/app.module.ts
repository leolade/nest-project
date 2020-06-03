import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {SampleModule} from "./sample/sample.module";

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/local'), SampleModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
