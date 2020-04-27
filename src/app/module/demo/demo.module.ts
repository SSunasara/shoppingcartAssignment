import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';


@NgModule({
  declarations: [
    DemoComponent,
    DataBindingComponent,
    DirectiveDemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
