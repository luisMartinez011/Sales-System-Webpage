import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleBtnComponent } from './new-sale-btn.component';

describe('NewSaleBtnComponent', () => {
  let component: NewSaleBtnComponent;
  let fixture: ComponentFixture<NewSaleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSaleBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSaleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
