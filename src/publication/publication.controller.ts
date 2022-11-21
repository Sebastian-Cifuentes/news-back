import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationSlideShowService } from './publication-slideshow.service';
import { InjectModel } from '@nestjs/mongoose';
import { Publication } from './entities/publication.entity';
import { Model } from 'mongoose';
import { PublicationNormalService } from './publication-normal.service';
import { ContextIdFactory } from '@nestjs/core';

@Controller('publication')
export class PublicationController {
  constructor(
    private readonly publicationService: PublicationService,
    @InjectModel(Publication.name)
    private readonly publicationModel: Model<Publication>
  ) {}

  @Post('slideshow')
  @HttpCode(HttpStatus.CREATED)
  createSlideShow(@Body() createPublicationDto: CreatePublicationDto) {
    const publicationSlideShow = new PublicationSlideShowService(createPublicationDto, this.publicationModel);
    return publicationSlideShow.execute();
  }
  
  @Post('normal')
  @HttpCode(HttpStatus.CREATED)
  createNormal(@Body() createPublicationDto: CreatePublicationDto) {
    const publicationNormal = new PublicationNormalService(createPublicationDto, this.publicationModel);
    return publicationNormal.execute();
  }

  @Get()
  findAll() {
    return this.publicationService.findAll();
  }
}

ContextIdFactory
