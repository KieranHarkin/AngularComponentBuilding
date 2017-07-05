import { Injectable } from '@angular/core';
import { IPhoto } from './photo.model'

@Injectable()
export class PhotoService {

    public getPhotos() : IPhoto[] {
        return photos;
    }

    public getPhoto(id:number) : IPhoto {
        return photos.find(photo => photo.id === id);
    }
}

     const photos = [
        {
            'id': 1,
            'title':'test photo one',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 4
        },
        {
            'id': 2,            
            'title':'test photo two',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 2            
        },
        {
            'id': 3,            
            'title':'test photo three',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 1          
        },
        {
            'id': 4,            
            'title':'test photo four',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 5            
        },
        {
            'id': 5,            
            'title':'test photo five',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 3            
        },
        {
            'id': 6,            
            'title':'test photo six',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 5            
        }
    ]