import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingOneComponent } from './setting-one/setting-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'myAccount/settingOne', pathMatch: 'full' },
  // { path: 'myAccount', component : SettingOneComponent },
  // { path: 'dashboard', loadChildren: () => import('./my-account.module').then(m => m.MyAccountModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
