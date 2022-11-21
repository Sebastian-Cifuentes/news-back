import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ImageDto } from "../dto/create-publication.dto";

@Schema()
export class Publication {

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    desc: string;

    @Prop({required: true})
    publicationType: string;

    @Prop([{type: String, required: true}])
    tags: string[];

    @Prop({default: new Date()})
    createdAt: Date;

    @Prop([{type: ImageDto, required: true}])
    images: ImageDto[]

}

export const PublicationSchema = SchemaFactory.createForClass(Publication)
