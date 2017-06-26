import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PhotoListComponent } from './components/photos/photo-list.component';
<<<<<<< HEAD
import { StarRatingComponent } from './components/shared/star-rating.component';
import { PhotoService } from './components/photos/photo.service';

=======
>>>>>>> 303001bfcc6fbb102b942c566c77f401b3dd6bd2

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        PhotoListComponent,
<<<<<<< HEAD
        StarRatingComponent,
        HomeComponent
    ],
    providers: [PhotoService],
=======
        HomeComponent
    ],
>>>>>>> 303001bfcc6fbb102b942c566c77f401b3dd6bd2
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'photos', component: PhotoListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
