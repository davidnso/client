import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletComponent } from './outlet/outlet.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './outlet/components/orders/orders.component';
import { SettingsComponent } from './outlet/components/settings/settings.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OutletComponent, SideBarComponent, DashboardComponent, OrdersComponent, SettingsComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
