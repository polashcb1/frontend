import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PrivateLayoutComponent} from "../theme/layout/private-layout/private-layout.component";
import {PrivateComponent} from "./private.component";


const routes: Routes = [
  {
    path: 'access-control',
    component: PrivateLayoutComponent,
    loadChildren: () => import('./access-control/access-control.module').then((m) => m.AccessControlModule)
  },
  {
    path: 'operations',
    component: PrivateLayoutComponent,
    loadChildren: () => import('./operations/operations.module').then((m) => m.OperationsModule)
  }
];

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrivateModule {
}
