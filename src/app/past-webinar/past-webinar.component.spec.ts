import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWebinarComponent } from './past-webinar.component';

describe('PastWebinarComponent', () => {
  let component: PastWebinarComponent;
  let fixture: ComponentFixture<PastWebinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastWebinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
