import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {AboutComponent} from './views/about/about.component';

const routes: Routes = [
	{
		path: 'post',
		component: CardComponent,
		pathMatch: 'full'
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
