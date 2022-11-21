import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { Publication, PublicationSchema } from './entities/publication.entity';

@Injectable()
export class PublicationService {

  constructor(
    @InjectModel(Publication.name)
    private readonly publicationModel: Model<Publication>
  ) {}

  async create(createPublicationDto: CreatePublicationDto) {
    try {

      const publication = await this.publicationModel.create(createPublicationDto);

      return { publication };

    } catch(err) {
      this.handleException(err);
    }
  }

  async findAll() {
    const publications =  await this.publicationModel.find().sort({createdAt: -1});
    return { publications }
  }

  handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Publication exist in db ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error)
  }
}

