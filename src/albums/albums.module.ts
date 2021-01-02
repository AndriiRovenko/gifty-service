import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { Album, AlbumSchema } from './schemas/album.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Album.name, schema: AlbumSchema }
  ])],
  providers: [AlbumsService],
  controllers: [AlbumsController]
})
export class AlbumsModule { }
