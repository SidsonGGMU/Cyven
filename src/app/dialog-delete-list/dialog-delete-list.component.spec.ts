import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteListComponent } from './dialog-delete-list.component';

describe('DialogDeleteListComponent', () => {
  let component: DialogDeleteListComponent;
  let fixture: ComponentFixture<DialogDeleteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
