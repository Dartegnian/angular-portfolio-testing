import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeHobbiesSkillsComponent } from './about-me-hobbies-skills.component';

describe('AboutMeHobbiesSkillsComponent', () => {
  let component: AboutMeHobbiesSkillsComponent;
  let fixture: ComponentFixture<AboutMeHobbiesSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeHobbiesSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeHobbiesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
