import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

import { ButtonComponent } from './button.component'

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [MatButtonModule],
})
export class ButtonModule {}
