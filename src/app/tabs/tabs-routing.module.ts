
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from 'src/app/guard/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule),
              //canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bible/bible.module').then(m => m.BiblePageModule),
              //canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../explore/explore.module').then(m => m.ExplorePageModule),
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../course/course.module').then(m => m.CoursePageModule),
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountPageModule),
          }
        ]
      },
      // {
      //   path: 'tab2',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../cart/cart.module').then(m => m.CartPageModule),
      //       canActivate: [AuthGuard]
      //     }
      //   ]
      // },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../account/account.module').then(m => m.AccountPageModule),
      //       canActivate: [AuthGuard]
      //     },
         
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
