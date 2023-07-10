import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemGroudPage } from './item-groud.page';

describe('ItemGroudPage', () => {
  let component: ItemGroudPage;
  let fixture: ComponentFixture<ItemGroudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemGroudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
