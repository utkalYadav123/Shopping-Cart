import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CheckoutRoutingModule],
    declarations: [CheckoutComponent]
})
export class CheckoutModule {}
