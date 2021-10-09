import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MovieCardComponentComponent } from './movie-card-component/movie-card-component.component';
import { MovieFormComponentComponent } from './movie-form-component/movie-form-component.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ MovieCardComponentComponent, MovieFormComponentComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  
  ],
  providers: [
  ],
})
export class HomeModule { }
