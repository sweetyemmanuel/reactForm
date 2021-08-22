import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Route, ActivatedRoute, Router} from '@angular/router';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

      this.loginForm = this.fb.group({
        FirstName : ['' , Validators.required],
        LastName :  ['' , Validators.required] ,
        Mobile : ['', Validators.required, Validators.maxLength(10)],
        Email :  ['' , Validators.required],
        Address: [ '' , Validators.required]
      });


    }

  ngOnInit() {}
   save() {
    let data = this.loginForm.value;
    this.router.navigate(['/viewdetails'],
     {queryParams: {data: JSON.stringify(data)}} );
  //console.log(this.loginForm . value);
}

}
