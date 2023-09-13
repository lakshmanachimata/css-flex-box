import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBaseComponent } from './flex.base.component';

describe('FlexBaseComponent', () => {
  let component: FlexBaseComponent;
  let fixture: ComponentFixture<FlexBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexBaseComponent]
    });
    fixture = TestBed.createComponent(FlexBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
