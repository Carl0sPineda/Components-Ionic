import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTimePickerPage } from './date-time-picker.page';

describe('DateTimePickerPage', () => {
  let component: DateTimePickerPage;
  let fixture: ComponentFixture<DateTimePickerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DateTimePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
