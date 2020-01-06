import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employerpostjobcontactdetails',
  templateUrl: './employerpostjobcontactdetails.page.html',
  styleUrls: ['./employerpostjobcontactdetails.page.scss'],
})
export class EmployerpostjobcontactdetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage() {
    this.router.navigate(['/dashboardemployer'])
  }

  nextPage(){
    this.router.navigate(['/employerpostjobjoblocation'])
  }
}
