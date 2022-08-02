import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './common/cancel/cancel.component';
import { SuccessComponent } from './common/success/success.component';

const routes: Routes = [
  {path:'success', component:SuccessComponent},
  {path:'cancel', component:CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
