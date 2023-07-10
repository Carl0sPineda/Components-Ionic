import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonTextPage } from './skeleton-text.page';

describe('SkeletonTextPage', () => {
  let component: SkeletonTextPage;
  let fixture: ComponentFixture<SkeletonTextPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkeletonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
