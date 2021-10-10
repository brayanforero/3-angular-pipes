import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TranslatePassPipe } from './pipes/translate-pass.pipe';

@NgModule({
  declarations: [AppComponent, TranslatePassPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
