import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';


const routes: Routes = [
  { path : 'databinding', component: DataBindingComponent},
  { path : 'directive', component: DirectiveDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
