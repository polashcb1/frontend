import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin.component";
import {PrivateModule} from "../private.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../theme/shared/shared.module";


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
    PrivateModule,
    SharedModule,
    MatTabsModule,
    MatIconModule],
})
export class SuperAdminModule {
}
