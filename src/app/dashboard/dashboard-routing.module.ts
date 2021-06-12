import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './outlet/components/orders/orders.component';
import { SettingsComponent } from './outlet/components/settings/settings.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'orders',
                component: OrdersComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
            {
                path: 'home',
                component: HomeComponent,
              },
        ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
