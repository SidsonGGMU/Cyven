import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListsManagerComponent } from './all-lists-manager.component';

describe('AllListsManagerComponent', () => {
  let component: AllListsManagerComponent;
  let fixture: ComponentFixture<AllListsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllListsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
