import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingOneComponent } from './components/my-account/setting-one/setting-one.component';

const routes: Routes = [
  { path: 'myAccount/settings', component : SettingOneComponent },
  { path: 'myAccount/settings', loadChildren: () => import('./components/my-account/my-account.module').then(m => m.MyAccountModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
