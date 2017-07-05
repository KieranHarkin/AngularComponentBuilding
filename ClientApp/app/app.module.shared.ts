import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PhotoListComponent } from './components/photos/photo-list.component';
import { PhotoDetailsComponent } from './components/photos/photo-details.component';
import { FormsListComponent } from './components/forms/forms-list.component';

import { StarRatingComponent } from './components/shared/star-rating.component';


import { PhotoService } from './components/photos/photo.service';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        PhotoListComponent,
        PhotoDetailsComponent,
        FormsListComponent,
        StarRatingComponent,
        HomeComponent
    ],
    providers: [PhotoService],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'photos', component: PhotoListComponent },
            { path: 'photos/:id', component: PhotoDetailsComponent},
            { path: 'forms', component: FormsListComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
