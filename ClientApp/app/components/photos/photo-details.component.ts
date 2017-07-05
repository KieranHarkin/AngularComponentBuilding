import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PhotoService } from './photo.service';
import { IPhoto } from './photo.model';

@Component({
    providers: [PhotoService],
    templateUrl: 'photo-details.component.html'
})

export class PhotoDetailsComponent implements OnInit {
    
    public photo: IPhoto;
    
    constructor(private _photoService: PhotoService, private _router: Router) { }

    ngOnInit() { 
        this.photo = this._photoService.getPhoto(1);
    }

    public GoBack() {
        this._router.navigate(['/photos'])
    }
}