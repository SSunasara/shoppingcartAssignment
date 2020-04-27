import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './module/shopingcart/account/auth.guard';


const routes: Routes = [  
  { path : 'product', loadChildren: () => 
    import('./module/shopingcart/product/product.module').then(m => m.ProductModule)},
  { path : 'customer', loadChildren: () => 
    import('./module/shopingcart/customer/customer.module').then(m => m.CustomerModule) },
  { path : 'admin', loadChildren: () => 
    import('./module/shopingcart/admin/admin.module').then(m => m.AdminModule) },
  { path : 'account', loadChildren: () => 
    import('./module/shopingcart/account/account.module').then(m => m.AccountModule) },
  { path : 'demo', loadChildren: () => 
    import('./module/demo/demo.module').then(m => m.DemoModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
