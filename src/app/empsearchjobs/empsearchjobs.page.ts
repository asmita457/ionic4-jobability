import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empsearchjobs',
  templateUrl: './empsearchjobs.page.html',
  styleUrls: ['./empsearchjobs.page.scss'],
})
export class EmpsearchjobsPage implements OnInit {


  empSearchResultsArray = [
    {
      name: 'UBA RAJU',
      title: 'Accountant Manager',
      company: 'Wipro',
      minexp: '0',
      maxexp: '3',
      location: 'pune',
      postdate: '3'
    },
    {
      name: 'UBA RAJU',
      title: 'Accountant Manager',
      company: 'Wipro',
      minexp: '0',
      maxexp: '3',
      location: 'chennai',
      postdate: '3'
    },
    {
      name: 'UBA RAJU',
      title: 'Accountant Manager',
      company: 'Wipro',
      minexp: '0',
      maxexp: '3',
      location: 'mumbai',
      postdate: '3'
    },
    {
      name: 'UBA RAJU',
      title: 'Accountant Manager',
      company: 'Wipro',
      minexp: '0',
      maxexp: '3',
      location: 'pune',
      postdate: '3'
    }
  ]
  constructor(private router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  empSearchJobDetail() {
    this.router.navigate(['/empsearchjobdetail'])
  }

  filterEmpSearchResult() {
    this.router.navigate(['/empsearchfilter'])
  }


  goBack() {
    this.location.back();
    // this.router.navigate(['/dashboardemployer']);
  }
}
