import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {console.log(params); });
  }

}
