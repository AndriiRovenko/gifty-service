import { Model } from 'mongoose';
import { AlbumDTO } from './dto/album.dto';
import { Album, AlbumDocument } from './schemas/album.schema';
export declare class AlbumsService {
    private albumModel;
    constructor(albumModel: Model<AlbumDocument>);
    getAlbums(): Promise<Album[]>;
    addAlbum(albumDTO: AlbumDTO): Promise<Album>;
    removeAlbum(id: string): Promise<Album>;
    findAlbum(query: string): Promise<Album[]>;
}
