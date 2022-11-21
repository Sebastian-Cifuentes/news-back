import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PublicationModule } from '../publication/publication.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PublicationModule]
})
export class SeedModule {}
