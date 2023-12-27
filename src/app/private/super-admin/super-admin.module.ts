import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin.component";


const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent
  },
];

@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class SuperAdminModule {
}
