import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from '../../link-listener.service';

@Component({
	selector: 'app-hero-banner',
	templateUrl: './hero-banner.component.html',
	styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
	linkSubscription: any;
	navItem: any;
	bannerClass: string;

	constructor(
		private linkService: LinkListenerService,
		private router: Router
	) {
		this.navItem = this.linkService.navItems[this.router.url];
		this.bannerClass = "";
		this.changeBannerClass();

		this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
			next: (newItem) => {
				this.navItem = newItem;
				this.changeBannerClass();
			}
		});
	}

	ngOnInit(): void {
	}

	changeBannerClass(): void {
		if (this.router.url === "/") {
			this.bannerClass = "home";
		} else {
			this.bannerClass = String(this.navItem['link']).replace("/", "");
		}
	}
}
