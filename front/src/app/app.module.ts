import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CompraComponent } from './page/compra/compra.component';
import { LandingComponent } from './page/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompraComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
