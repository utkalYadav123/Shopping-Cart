import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './login/login.module#LoginModule'},
    //{ path: 'products', loadChildren: './login/login.module#LoginModule'},
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
