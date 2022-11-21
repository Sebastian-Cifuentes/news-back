import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Publication, PublicationSchema } from './entities/publication.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService, ConfigService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Publication.name,
        schema: PublicationSchema
      }
    ])
  ],
  exports: [
    PublicationService,
    MongooseModule
  ]
})
export class PublicationModule {}
