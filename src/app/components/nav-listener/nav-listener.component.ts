import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';

@Component({
	selector: 'app-nav-listener',
	templateUrl: './nav-listener.component.html',
	styleUrls: ['./nav-listener.component.scss']
})
export class NavListenerComponent implements OnInit {
	linkSubscription: any;
	navItem: any;
	selectedAboutList: "hobbies" | "skills";

	constructor(
		private linkService: LinkListenerService
	) {
		this.navItem = {
			link: "",
			name: "",
			icon: "",
		};
		this.selectedAboutList = "hobbies";

		this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
			next: (newItem) => {
				this.navItem = newItem;
			}
		});
	}

	ngOnInit(): void {
	}

	changeAboutList(type: "hobbies" | "skills"): void {
		this.selectedAboutList = type;
	}
}
