import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BtnDirective } from './btn/btn.directive';

@NgModule({
  declarations: [BtnDirective],
  imports: [SharedModule],
  exports: [BtnDirective],
})
export class UiComponentsModule {}
