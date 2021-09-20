import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NgxChronoUiKitModule } from 'ngx-chrono-ui-kit'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxChronoUiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
