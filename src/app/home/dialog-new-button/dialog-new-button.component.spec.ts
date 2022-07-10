import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewButton } from './dialog-new-button.component';

describe('DialogNewButton', () => {
  let component: DialogNewButton;
  let fixture: ComponentFixture<DialogNewButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogNewButton]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
