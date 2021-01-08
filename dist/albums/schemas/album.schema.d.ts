import { Document } from 'mongoose';
export declare type AlbumDocument = Album & Document;
export declare class Album {
    name: string;
    artist: string;
    coverImage: string;
}
export declare const AlbumSchema: import("mongoose").Schema<any, import("mongoose").Model<any>>;
