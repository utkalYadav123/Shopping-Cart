import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GrdFilterPipe } from '../../pipes/grd-filter.pipe';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [GrdFilterPipe],
    exports: [GrdFilterPipe]
})
export class ApplicationPipesModule {}