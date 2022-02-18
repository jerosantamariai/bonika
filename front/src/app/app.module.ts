import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CompraComponent } from './page/compra/compra.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProductosComponent } from './page/productos/productos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './shared/form/form.component';
import { BlogsComponent } from './page/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompraComponent,
    LandingComponent,
    ProductosComponent,
    FormComponent,
    FooterComponent,
    BlogsComponent
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
