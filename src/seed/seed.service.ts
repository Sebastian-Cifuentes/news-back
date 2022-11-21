import { Injectable } from '@nestjs/common';
import { Publication } from 'src/publication/entities/publication.entity';
import { PublicationNormalService } from 'src/publication/publication-normal.service';
import { PUBLICATION_SEED } from './publication.seed';
import { CreatePublicationDto } from '../publication/dto/create-publication.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PublicationSlideShowService } from 'src/publication/publication-slideshow.service';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel('Publication')
    private readonly publicationModel: Model<Publication>
  ) {}

  loadSeed() {
    const data = PUBLICATION_SEED;
    data.forEach((d: CreatePublicationDto) => {
      if (d.publicationType === 'normal') { 
        const publicationNormal = new PublicationNormalService(d, this.publicationModel);
        return publicationNormal.execute();
      } else {
        const publicationSlideShow = new PublicationSlideShowService(d, this.publicationModel);
        return publicationSlideShow.execute();
      }
    })

    return `Seed executed`;
  }
}
