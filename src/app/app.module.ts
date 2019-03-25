import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { CardComponent } from './components/card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
	declarations: [
    	AppComponent,
    	AboutComponent,
    	CardComponent
  	],
  	imports: [
    	BrowserModule,
		BrowserAnimationsModule,
    	AppRoutingModule,
		MatButtonModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
