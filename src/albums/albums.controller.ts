import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AlbumDTO } from './dto/album.dto';
import { AlbumsService } from './albums.service';
import { Album } from './schemas/album.schema';

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {}

    @Get('/search')
    async findAlbum(@Query('searchExp') searchExp): Promise<Album[]> {
        const albums = await this.albumsService.findAlbum(searchExp);
        return albums;
    }

    @Get()
    async getAlbums(): Promise<Album[]> {
        const albums = await this.albumsService.getAlbums();
        return albums;
    }

    @Post()
    async addAlbum(@Body() album: AlbumDTO): Promise<Album> {
        const addedAlbum = await this.albumsService.addAlbum(album);
        return addedAlbum;
    }

    @Delete()
    async removeAlbum(@Query('albumId') albumId): Promise<Album> {
        const album = await this.albumsService.removeAlbum(albumId);
        return album;
    }
}
