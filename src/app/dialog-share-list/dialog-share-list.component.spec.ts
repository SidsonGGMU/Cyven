import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShareListComponent } from './dialog-share-list.component';

describe('DialogShareListComponent', () => {
  let component: DialogShareListComponent;
  let fixture: ComponentFixture<DialogShareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
