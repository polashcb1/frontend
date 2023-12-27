import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin.component";
import {PrivateModule} from "../private.module";


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
    RouterModule.forChild(routes),
    PrivateModule
  ],
})
export class SuperAdminModule {
}
