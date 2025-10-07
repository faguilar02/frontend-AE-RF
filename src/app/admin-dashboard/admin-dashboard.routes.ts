import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DemoComponent } from './pages/demo/demo.component';
import AdminDashboardLayoutComponent from './layout/admin-dashboard-layout/admin-dashboard-layout.component';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'demo',
        component: DemoComponent,
      },
      {
        path: '**',
        redirectTo: 'demo',
      },
    ],
  },
];

export default adminDashboardRoutes;
