import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/profile',
    pathMatch: 'full'
  },{
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path:'explore',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/explore/explore.module').then( m => m.ExplorePageModule)
          }
        ]
      },
      {
        path:'home',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path:'notificat',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/notificat/notificat.module').then( m => m.NotificatPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}