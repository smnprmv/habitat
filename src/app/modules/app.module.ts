import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { PersonComponent } from '../components/person/person.component';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PersonComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
