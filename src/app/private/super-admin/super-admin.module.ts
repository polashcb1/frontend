import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin.component";
import {PrivateModule} from "../private.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../theme/shared/shared.module";
import {PortalModule} from "@angular/cdk/portal";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


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
    MatIconModule,
    FontAwesomeModule
  ],
})
export class SuperAdminModule {
}
