import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    FooterComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
