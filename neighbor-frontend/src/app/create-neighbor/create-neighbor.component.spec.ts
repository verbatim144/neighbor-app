import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNeighborComponent } from './create-neighbor.component';

describe('CreateNeighborComponent', () => {
  let component: CreateNeighborComponent;
  let fixture: ComponentFixture<CreateNeighborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNeighborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
