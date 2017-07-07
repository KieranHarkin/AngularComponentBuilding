import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customers/customer';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'template-form.component.html'
})

export class TemplateFormComponent implements OnInit {

    public customer: Customer = new Customer();
    public countries: string[] = ["Ireland", "England", "Scotland", "Wales"];

    constructor() { }

    ngOnInit() { }

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
}