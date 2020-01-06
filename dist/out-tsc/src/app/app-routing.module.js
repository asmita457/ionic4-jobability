import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'welcomescreen',
        pathMatch: 'full'
    },
    {
        path: 'welcomescreen',
        loadChildren: './welcomescreen/welcomescreen.module#WelcomescreenPageModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'dashboardjobseeker', loadChildren: './dashboardjobseeker/dashboardjobseeker.module#dashboardjobseekerPageModule' },
    { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
    { path: 'otpgeneration', loadChildren: './otpgeneration/otpgeneration.module#OtpgenerationPageModule' },
    { path: 'otpgeneratedsuccessfully', loadChildren: './otpgeneratedsuccessfully/otpgeneratedsuccessfully.module#OtpgeneratedsuccessfullyPageModule' },
    { path: 'savedjobs', loadChildren: './savedjobs/savedjobs.module#SavedjobsPageModule' },
    // { path: 'trackjobs', loadChildren: './trackjobs/trackjobs.module#TrackjobsPageModule' },
    { path: 'recommendedjobs', loadChildren: './recommendedjobs/recommendedjobs.module#RecommendedjobsPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'successstories', loadChildren: './successstories/successstories.module#SuccessstoriesPageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
    { path: 'postjob', loadChildren: './postjob/postjob.module#PostjobPageModule' },
    { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
    { path: 'data', loadChildren: './data/data.module#DataPageModule' },
    { path: 'updatecontact', loadChildren: './updatecontact/updatecontact.module#UpdatecontactPageModule' },
    { path: 'updateeducational', loadChildren: './updateeducational/updateeducational.module#UpdateeducationalPageModule' },
    { path: 'updateskillset', loadChildren: './updateskillset/updateskillset.module#UpdateskillsetPageModule' },
    { path: 'updateworkexperience', loadChildren: './updateworkexperience/updateworkexperience.module#UpdateworkexperiencePageModule' },
    { path: 'dashboardemployer', loadChildren: './dashboardemployer/dashboardemployer.module#dashboardemployerPageModule' },
    { path: 'dashboardserviceprovider', loadChildren: './dashboardserviceprovider/dashboardserviceprovider.module#DashboardserviceproviderPageModule' },
    { path: 'welcomescreen', loadChildren: './welcomescreen/welcomescreen.module#WelcomescreenPageModule' },
    { path: 'employerprofile', loadChildren: './employerprofile/employerprofile.module#EmployerprofilePageModule' },
    { path: 'trackjobsemployee', loadChildren: './trackjobsemployee/trackjobsemployee.module#TrackjobsemployeePageModule' },
    { path: 'trackjobsjobseeker', loadChildren: './trackjobsjobseeker/trackjobsjobseeker.module#TrackjobsjobseekerPageModule' },
    { path: 'joblistingemployee', loadChildren: './joblistingemployee/joblistingemployee.module#JoblistingemployeePageModule' },
    { path: 'recommandedjobs', loadChildren: './recommandedjobs/recommandedjobs.module#RecommandedjobsPageModule' },
    { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
    { path: 'updateemployeecontactinfo', loadChildren: './updateemployeecontactinfo/updateemployeecontactinfo.module#UpdateemployeecontactinfoPageModule' },
    { path: 'updateemployeeemployerinfo', loadChildren: './updateemployeeemployerinfo/updateemployeeemployerinfo.module#UpdateemployeeemployerinfoPageModule' },
    { path: 'serviceproviderprofile', loadChildren: './serviceproviderprofile/serviceproviderprofile.module#ServiceproviderprofilePageModule' },
    { path: 'updateserviceprovidercontactinfo', loadChildren: './updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.module#UpdateserviceprovidercontactinfoPageModule' },
    { path: 'updateserviceproviderorganisationinfo', loadChildren: './updateserviceproviderorganisationinfo/updateserviceproviderorganisationinfo.module#UpdateserviceproviderorganisationinfoPageModule' },
    { path: 'searchjobs', loadChildren: './searchjobs/searchjobs.module#SearchjobsPageModule' },
    { path: 'searchjobdetail', loadChildren: './searchjobdetail/searchjobdetail.module#SearchjobdetailPageModule' },
    { path: 'filtersearchresult', loadChildren: './filtersearchresult/filtersearchresult.module#FiltersearchresultPageModule' },
    { path: 'empsearchjobs', loadChildren: './empsearchjobs/empsearchjobs.module#EmpsearchjobsPageModule' },
    { path: 'empsearchfilter', loadChildren: './empsearchfilter/empsearchfilter.module#EmpsearchfilterPageModule' },
    { path: 'empsearchjobdetail', loadChildren: './empsearchjobdetail/empsearchjobdetail.module#EmpsearchjobdetailPageModule' },
    { path: 'servicesdetailinfo', loadChildren: './servicesdetailinfo/servicesdetailinfo.module#ServicesdetailinfoPageModule' },
    { path: 'editservices', loadChildren: './editservices/editservices.module#EditservicesPageModule' },
    { path: 'searchresumes', loadChildren: './searchresumes/searchresumes.module#SearchresumesPageModule' },
    { path: 'postservice', loadChildren: './postservice/postservice.module#PostservicePageModule' },
    { path: 'employerjobapplications', loadChildren: './employerjobapplications/employerjobapplications.module#EmployerjobapplicationsPageModule' },
    { path: 'empcandidateprofile', loadChildren: './empcandidateprofile/empcandidateprofile.module#EmpcandidateprofilePageModule' },
    { path: 'shortlistedcandidates', loadChildren: './shortlistedcandidates/shortlistedcandidates.module#ShortlistedcandidatesPageModule' },
    { path: 'employerpostjobdetails', loadChildren: './employerpostjobdetails/employerpostjobdetails.module#EmployerpostjobdetailsPageModule' },
    { path: 'employerpostjoblocation', loadChildren: './employerpostjoblocation/employerpostjoblocation.module#EmployerpostjoblocationPageModule' },
    { path: 'employerpostjobrequirement', loadChildren: './employerpostjobrequirement/employerpostjobrequirement.module#EmployerpostjobrequirementPageModule' },
    { path: 'employerpostjobmanagerresponses', loadChildren: './employerpostjobmanagerresponses/employerpostjobmanagerresponses.module#EmployerpostjobmanagerresponsesPageModule' },
    { path: 'employerpostjobcontactdetails', loadChildren: './employerpostjobcontactdetails/employerpostjobcontactdetails.module#EmployerpostjobcontactdetailsPageModule' },
    { path: 'updateserviceproviderpostservicecontactinfo', loadChildren: './updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.module#UpdateserviceproviderpostservicecontactinfoPageModule' },
    { path: 'updateserviceproviderservicelocation', loadChildren: './updateserviceproviderservicelocation/updateserviceproviderservicelocation.module#UpdateserviceproviderservicelocationPageModule' },
    { path: 'employershortlistedcandidates', loadChildren: './employershortlistedcandidates/employershortlistedcandidates.module#EmployershortlistedcandidatesPageModule' },
    { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule' },
    { path: 'searchservices', loadChildren: './searchservices/searchservices.module#SearchservicesPageModule' },
    { path: 'servicedetails', loadChildren: './servicedetails/servicedetails.module#ServicedetailsPageModule' },
    { path: 'servicereview', loadChildren: './servicereview/servicereview.module#ServicereviewPageModule' },
    { path: 'employerjobdetail', loadChildren: './employerjobdetail/employerjobdetail.module#EmployerjobdetailPageModule' },
    { path: 'employersearchresumes', loadChildren: './employersearchresumes/employersearchresumes.module#EmployersearchresumesPageModule' },
    { path: 'employersearchresumesfilter', loadChildren: './employersearchresumesfilter/employersearchresumesfilter.module#EmployersearchresumesfilterPageModule' },
    { path: 'employershortlistedcandidate', loadChildren: './employershortlistedcandidate/employershortlistedcandidate.module#EmployershortlistedcandidatePageModule' },
    { path: 'employerqueryraised', loadChildren: './employerqueryraised/employerqueryraised.module#EmployerqueryraisedPageModule' },
    { path: 'addsuccessstories', loadChildren: './addsuccessstories/addsuccessstories.module#AddsuccessstoriesPageModule' },
    { path: 'successstorydetails', loadChildren: './successstorydetails/successstorydetails.module#SuccessstorydetailsPageModule' },
    { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
    { path: 'login-with-otp-and-forget-password', loadChildren: './login-with-otp-and-forget-password/login-with-otp-and-forget-password.module#LoginWithOtpAndForgetPasswordPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map