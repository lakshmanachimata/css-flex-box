import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDetailComponent } from './flex.detail.component';

describe('FlexDetailComponent', () => {
  let component: FlexDetailComponent;
  let fixture: ComponentFixture<FlexDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexDetailComponent]
    });
    fixture = TestBed.createComponent(FlexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
