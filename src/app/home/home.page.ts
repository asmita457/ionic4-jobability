import { Component, OnInit } from '@angular/core';
import { NavController, Events, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userstype: any
  userName: any
  seekerLogin: any

  constructor(
    public navctrl: NavController,
    private router: Router,
    public events: Events,
    public dataServices: DataservicesService,
    private platform: Platform
  ) {

  }

  ngOnInit() {
    // this.platform.ready().then(() => {
      this.loginSession();
    // })
  }

  ionViewWillEnter() {
    
  }

  loginSession() {
    this.userstype = localStorage.getItem('userstype');
    let loginSession = localStorage.getItem('login');
    if (loginSession == 'yes') {
      this.login();
      this.events.publish('Event-UserName')
      let loginUserStatus = localStorage.getItem('userstype');
      if (loginUserStatus == "4" || loginUserStatus == "Employer") {
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardemployer']);
        return;
      }
      else if (loginUserStatus == "5" || loginUserStatus == "Job Seeker") {
        this.seekerLogin = "JobSeeker"
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardjobseeker']);
        // this.router.navigate(['/otpgeneration']);
        return;
      }
      //  (loginUserStatus == "8" || loginUserStatus == "Service Provider") 
      else {
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardserviceprovider']);
        return;
      }
    }
    else {

      this.router.navigate(['/welcomescreen']);
    }
  }

  login() {
    if (this.userstype == "4" || this.userstype == "Employer") {
      let appPages = [
        {
          title: 'Home',
          url: '/dashboardemployer'
        },
        {
          title: 'My Profile',
          url: '/employerprofile'
        },
        {
          title: 'Post Job',
          // url: '/employerpostjobdetails'
        },
        {
          title: 'Job Listing',
          url: '/joblistingemployee'
        },
        {
          title: 'Search Resumes',
          // url: '/employersearchresumes'
        },
        {
          title: 'Shortlisted Candidates',
          url: '/employershortlistedcandidate'
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen',
        }

      ];
      this.dataServices.setSideMenuItems(appPages)
      return;
    } else if (this.userstype == "5" || this.userstype == "Job Seeker") {
      let appPages = [
        {
          title: 'Home',
          url: '/dashboardjobseeker'
        },
        {
          title: 'My Profile',
          url: '/profile'
        },
        {
          title: 'Track Jobs',
          url: '/trackjobsjobseeker'
        },
        {
          title: 'Recommended Jobs',
          url: '/recommendedjobs'
        },
        {
          title: 'Services',
          // url: '/searchservices'
        },
        {
          title: 'Saved Jobs',
          url: '/savedjobs'
        },
        {
          title: 'Success Stories',
          url: '/successstories',
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen'
        }

      ];
      this.dataServices.setSideMenuItems(appPages)
      return;
    } else if (this.userstype == "8" || this.userstype == "Service Provider") {
      let appPages = [
        {
          title: 'Home',
          url: '/dashboardserviceprovider',
        },
        {
          title: 'My Profile',
          url: '/serviceproviderprofile',
        },
        {
          title: 'Post Service',
          // url: '/postservice'
        },
        {
          title: 'My Services',
          url: '/services'
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen',
        }

      ];
      this.dataServices.setSideMenuItems(appPages)
      return;
    } else if (this.userstype == "0") {
      let appPages = [
        {
          title: 'Log Out',
          url: '/welcomescreen',
          icon: 'log-out'
        }
      ];
      this.dataServices.setSideMenuItems(appPages)
      return;
    }
  }
}




