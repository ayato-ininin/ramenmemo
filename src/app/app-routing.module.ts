import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamensComponent } from './ramens/ramens.component';
import { RamenDetailComponent } from './ramen-detail/ramen-detail.component';
import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RamenRegisterComponent } from './ramen-register/ramen-register.component';

const routes: Routes = [
  { path: '', component: RamensComponent },
  { path: 'detail/:id', component: RamenDetailComponent },
  { path: 'dialog', component: DialogViewComponent },
  {path:'ramenRegister',component:RamenRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppRoutingModule { }
