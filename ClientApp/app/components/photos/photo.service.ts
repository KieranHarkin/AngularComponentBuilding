import { Injectable } from '@angular/core';
import { IPhoto } from './photo.model'

@Injectable()
export class PhotoService {

    public getPhotos() : IPhoto[] {
        return photos;
    }
}

     const photos = [
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 4
        },
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 2            
        },
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 1          
        },
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 5            
        },
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 3            
        },
        {
            'title':'test photo',
            'url': 'http://via.placeholder.com/300x300',
            'rating': 5            
        }
    ]