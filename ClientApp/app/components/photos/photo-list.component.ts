import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
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
=======

@Component({
    templateUrl: './photo-list.component.html'
})

export class PhotoListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
>>>>>>> 303001bfcc6fbb102b942c566c77f401b3dd6bd2
}