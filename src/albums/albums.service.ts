import { Injectable } from '@nestjs/common';
import { Album } from './album.model';
import { ALBUMS } from './albums.mock';

@Injectable()
export class AlbumsService {
    private albums = ALBUMS;

    public getAlbums(): Promise<Album[]> {
        return new Promise(resolve => {
            resolve(this.albums);
        });
    }

    public addAlbum(album: Album): Promise<Album[]> {
        return new Promise(resolve => {
            if (album.id === undefined) {
                album.id = String(Date.now());
            }
            this.albums.push(album);
            resolve(this.albums);
        });
    }

    public removeAlbum(idToRemove: string): Promise<Album[]> {
        return new Promise(resolve => {
            this.albums = this.albums.filter(el => el.id !== idToRemove);
            resolve(this.albums);
        });
    }
}
