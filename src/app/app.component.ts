import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from './link-listener.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	navItems: any;
	navItemsArray: any;

	constructor(
		private linkService: LinkListenerService,
		private router: Router
	) {
		this.navItems = this.linkService.navItems;

		this.navItemsArray = [];
		Object.keys(this.navItems).forEach(
			(key) => {
				this.navItemsArray.push(this.navItems[key]);
			}
		);
		console.log(this.navItemsArray);
	}

	linkClick(item: any) {
		this.router.navigate([
			item['link']
		]);
		this.linkService.setNavItem(item);
	}

	ngOnInit(): void {
		console.log("URL: ", this.router.url);
	}
}
