import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empsearchjobdetail',
  templateUrl: './empsearchjobdetail.page.html',
  styleUrls: ['./empsearchjobdetail.page.scss'],
})
export class EmpsearchjobdetailPage implements OnInit {

  constructor(private router: Router,
    private Location: Location) { }

  ngOnInit() {
  }
  updateJobDescription(){

  }


  goBack() {
    this.Location.back();

    // this.routera   .navigate(['/empsearchjobs']);
  }
}
