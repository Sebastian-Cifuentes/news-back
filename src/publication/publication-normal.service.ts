import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePublicationDto } from './dto/create-publication.dto';
import { Publication } from "./entities/publication.entity";
import { PublicationI } from "./interfaces/publication.interface";

@Injectable()
export class PublicationNormalService implements PublicationI {

    private createPublicationDto: CreatePublicationDto;

    constructor( 
        createPublicationDto: CreatePublicationDto,
        @InjectModel(Publication.name)
        private readonly publicationModel: Model<Publication>
    ) {
        this.createPublicationDto = createPublicationDto;
    }

    async execute(): Promise<{publication: CreatePublicationDto}> {
        try {
            const publication: CreatePublicationDto = await this.publicationModel.create(this.createPublicationDto);
      
            return { publication };
      
          } catch(err) {
            console.log(err)
            // this.handleException(err);
          }
    }

}