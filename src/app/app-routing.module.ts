import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [LocationGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule),
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then(m => m.ExplorePageModule),
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then(m => m.SciencePageModule),
  },
  {
    path: 'debate',
    loadChildren: () => import('./debate/debate.module').then(m => m.DebatePageModule),
  },
  {
    path: 'spritual',
    loadChildren: () => import('./spritual/spritual.module').then(m => m.SpritualPageModule),
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then(m => m.SocialPageModule),
  },
  {
    path: 'current',
    loadChildren: () => import('./current/current.module').then(m => m.CurrentPageModule),
  },
  {
    path: 'sciencetopic',
    loadChildren: () => import('./sciencetopic/sciencetopic.module').then(m => m.SciencetopicPageModule),
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CoursePageModule),
  },
  {
    path: 'coursegrades',
    loadChildren: () => import('./coursegrades/coursegrades.module').then(m => m.CoursegradesPageModule),
  },
  {
    path: 'coursetopics',
    loadChildren: () => import('./coursetopics/coursetopics.module').then(m => m.CoursetopicsPageModule),
  },
  {
    path: 'courseterms',
    loadChildren: () => import('./courseterms/courseterms.module').then(m => m.CoursetermsPageModule),
  },
  {
    path: 'bible',
    loadChildren: () => import('./bible/bible.module').then(m => m.BiblePageModule),
  },
  {
    path: 'biblecontent',
    loadChildren: () => import('./biblecontent/biblecontent.module').then(m => m.BiblecontentPageModule),
  },
  {
    path: 'saved',
    loadChildren: () => import('./saved/saved.module').then(m => m.SavedPageModule),
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusPageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusPageModule),
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'popup',
    loadChildren: () => import('./popup/popup.module').then(m => m.PopupPageModule),
  },
  {
    path: 'videopopup',
    loadChildren: () => import('./videopopup/videopopup.module').then(m => m.VideopopupPageModule),
  },
  {
    path: 'coursevideopopup',
    loadChildren: () => import('./coursevideopopup/coursevideopopup.module').then(m => m.CoursevideopopupPageModule),
  },
  {
    path: 'verse',
    loadChildren: () => import('./verse/verse.module').then(m => m.VersePageModule),
  },
  {
    path: 'gallarypopup',
    loadChildren: () => import('./gallarypopup/gallarypopup.module').then(m => m.GallarypopupPageModule),
  },
  {
    path: 'gallaryversepopup',
    loadChildren: () => import('./gallaryversepopup/gallaryversepopup.module').then(m => m.GallaryversepopupPageModule),
  },
  {
    path: 'savedvideopopup',
    loadChildren: () => import('./savedvideopopup/savedvideopopup.module').then(m => m.SavedvideopopupPageModule),
  },
  {
    path: 'facts',
    loadChildren: () => import('./facts/facts.module').then(m => m.FactsPageModule),
  },
  {
    path: 'audiopopup',
    loadChildren: () => import('./audiopopup/audiopopup.module').then(m => m.AudiopopupPageModule),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
