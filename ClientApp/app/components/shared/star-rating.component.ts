import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: [`
        .crop { overflow: hidden; }
    `]
})

export class StarRatingComponent implements OnInit {
    
    @Input() rating: number;
    public starWidth: number;
    
    constructor() { }

    ngOnInit() { 
        this.starWidth = this.rating * 86/5;
    }
}