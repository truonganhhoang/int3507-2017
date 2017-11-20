import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePointComponent } from './manage-point.component';

describe('ManagePointComponent', () => {
  let component: ManagePointComponent;
  let fixture: ComponentFixture<ManagePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
