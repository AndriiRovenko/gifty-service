import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Album } from './album.model';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {}

    @Get()
    async getAlbums(): Promise<Album[]> {
        const albums = await this.albumsService.getAlbums();
        return albums;
    }

    @Post()
    async addAlbum(@Body() album: Album): Promise<Album[]> {
        const albums = await this.albumsService.addAlbum(album);
        return albums;
    }

    @Delete()
    async removeAlbum(@Query() query): Promise<Album[]> {
        const albums = await this.albumsService.removeAlbum(query.albumId);
        return albums;
    }
}
