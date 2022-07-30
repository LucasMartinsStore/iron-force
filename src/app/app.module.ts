import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderDynamicComponent } from './app/components/shared/header-dynamic/header-dynamic.component';
import { IndexComponent } from './index/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDynamicComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
