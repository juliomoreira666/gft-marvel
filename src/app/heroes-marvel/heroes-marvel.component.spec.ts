import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMarvelComponent } from './heroes-marvel.component';

describe('HeroesMarvelComponent', () => {
  let component: HeroesMarvelComponent;
  let fixture: ComponentFixture<HeroesMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
