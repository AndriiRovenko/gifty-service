import { AlbumDTO } from './dto/album.dto';
import { AlbumsService } from './albums.service';
import { Album } from './schemas/album.schema';
export declare class AlbumsController {
    private readonly albumsService;
    constructor(albumsService: AlbumsService);
    findAlbum(searchExp: any): Promise<Album[]>;
    getAlbums(): Promise<Album[]>;
    addAlbum(album: AlbumDTO): Promise<Album>;
    removeAlbum(albumId: any): Promise<Album>;
}
