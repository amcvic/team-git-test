import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeckyComponent } from './becky.component';

describe('BeckyComponent', () => {
  let component: BeckyComponent;
  let fixture: ComponentFixture<BeckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeckyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
