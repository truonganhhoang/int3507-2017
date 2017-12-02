import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreFormComponent } from './score-form.component';

describe('ScoreFormComponent', () => {
  let component: ScoreFormComponent;
  let fixture: ComponentFixture<ScoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
