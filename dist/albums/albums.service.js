"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const album_schema_1 = require("./schemas/album.schema");
let AlbumsService = class AlbumsService {
    constructor(albumModel) {
        this.albumModel = albumModel;
    }
    getAlbums() {
        return this.albumModel.find().exec();
    }
    async addAlbum(albumDTO) {
        const addedAlbum = new this.albumModel(albumDTO);
        return addedAlbum.save();
    }
    removeAlbum(id) {
        return this.albumModel.findByIdAndRemove(id).exec();
    }
    findAlbum(query) {
        if (query.length === 0) {
            return Promise.resolve([]);
        }
        return this.albumModel.find({ $or: [
                { "name": { $regex: new RegExp(query, "i") } },
                { "artist": { $regex: new RegExp(query, "i") } }
            ] }).exec();
    }
};
AlbumsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(album_schema_1.Album.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AlbumsService);
exports.AlbumsService = AlbumsService;
//# sourceMappingURL=albums.service.js.map