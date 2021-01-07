import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlbumDTO } from './dto/album.dto';
import { Album, AlbumDocument } from './schemas/album.schema';

@Injectable()
export class AlbumsService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) { }

    public getAlbums(): Promise<Album[]> {
        return this.albumModel.find().exec();
    }

    public async addAlbum(albumDTO: AlbumDTO): Promise<Album> {
        const addedAlbum = new this.albumModel(albumDTO);
        return addedAlbum.save();
    }

    public removeAlbum(id: string): Promise<Album> {
        return this.albumModel.findByIdAndRemove(id).exec();
    }

    public findAlbum(query: string): Promise<Album[]> {
        return this.albumModel.find({ name: query }).exec();
    }
}
