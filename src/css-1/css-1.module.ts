import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { css1Component } from './css-1.component';
import { fullBgImgComponent } from './full-bg-img/full-bg-img';

@NgModule({
  declarations: [css1Component, fullBgImgComponent],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class css1Module {}
