import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.page.html',
  styleUrls: ['./postjob.page.scss'],
})
export class PostjobPage implements OnInit {

  constructor(public router: Router) { }

 
  ngOnInit() {
  }

  closePage(){
this.router.navigate(['/dashboardemployer']);
  }

  postJob(){

  }
}
