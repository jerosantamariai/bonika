import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ComponentsComponent } from './landing/components/components.component';
import { HomeComponent } from './landing/pages/home/home.component';
import { BlogsComponent } from './landing/pages/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ComponentsComponent,
    HomeComponent,
    BlogsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
