import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { CreateEventComponent } from '../../pages/create-event/create-event.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',            component: DashboardComponent },
  { path: 'tables',               component: TablesComponent },
  { path: 'icons',                component: IconsComponent },
  { path: 'maps',                 component: MapsComponent },
  { path: 'create-event',         component: CreateEventComponent },
  { path: 'create-event/:event',  component: CreateEventComponent },

];
