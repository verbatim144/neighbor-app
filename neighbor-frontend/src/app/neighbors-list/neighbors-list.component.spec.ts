import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborsListComponent } from './neighbors-list.component';

describe('NeighborsListComponent', () => {
  let component: NeighborsListComponent;
  let fixture: ComponentFixture<NeighborsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
