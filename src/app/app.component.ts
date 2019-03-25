import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	titles: String[] = ["test", "test", "test", "test", "test", "test", "test", "test"];

	constructor(private router: Router) { }

	r = this.router.url;

	ngOnInit(): void {
		console.log(this.router.url)
	}
}
