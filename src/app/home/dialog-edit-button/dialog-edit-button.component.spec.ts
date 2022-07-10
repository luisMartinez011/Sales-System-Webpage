import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditButtonComponent } from './dialog-edit-button.component';

describe('DialogEditButtonComponent', () => {
  let component: DialogEditButtonComponent;
  let fixture: ComponentFixture<DialogEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
