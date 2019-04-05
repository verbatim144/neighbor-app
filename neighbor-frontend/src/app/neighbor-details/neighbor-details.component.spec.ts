import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborDetailsComponent } from './neighbor-details.component';

describe('NeighborDetailsComponent', () => {
  let component: NeighborDetailsComponent;
  let fixture: ComponentFixture<NeighborDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
