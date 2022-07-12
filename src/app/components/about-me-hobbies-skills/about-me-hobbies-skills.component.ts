import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-me-hobbies-skills',
	templateUrl: './about-me-hobbies-skills.component.html',
	styleUrls: ['./about-me-hobbies-skills.component.scss']
})
export class AboutMeHobbiesSkillsComponent implements OnInit {
	@Input() selectedList: "hobbies" | "skills";
	hobbies: string[];
	skills: string[];

	constructor() {
		this.selectedList = "hobbies";
		this.hobbies = [
			"Archery",
			"Reading",
			"Watching YouTube",
			"Writing"
		];
		this.skills = [
			"Programming",
			"Writing",
			"Linux"
		];
	}

	ngOnInit(): void {
	}

}
