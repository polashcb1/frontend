import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./_helpers";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
