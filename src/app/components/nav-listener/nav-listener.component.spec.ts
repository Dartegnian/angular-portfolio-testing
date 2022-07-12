import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListenerComponent } from './nav-listener.component';

describe('NavListenerComponent', () => {
  let component: NavListenerComponent;
  let fixture: ComponentFixture<NavListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
