import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormComponentComponent } from './movie-form-component.component';

describe('MovieFormComponentComponent', () => {
  let component: MovieFormComponentComponent;
  let fixture: ComponentFixture<MovieFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
