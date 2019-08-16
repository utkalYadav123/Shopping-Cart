import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { HttpServiceService } from './shared/services/http-service.service';
import { ConstantsService } from './shared/services/constants.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastrModule} from 'ngx-toastr';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import "angular2-navigate-with-data";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        }),
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        NgxPaginationModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, HttpServiceService,
        ConstantsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
