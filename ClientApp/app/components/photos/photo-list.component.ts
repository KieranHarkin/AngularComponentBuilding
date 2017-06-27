import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service'
import { IPhoto } from './photo.model'

@Component({
    providers: [PhotoService],
    templateUrl: './photo-list.component.html',
    styleUrls:[`
        .photo-list {display: inline-block; margin: 5px;}
    `]
})

export class PhotoListComponent implements OnInit {
    constructor(private _photoService: PhotoService) { }

    public photos: IPhoto[];

    ngOnInit() {
        this.photos = this._photoService.getPhotos();
    }
}