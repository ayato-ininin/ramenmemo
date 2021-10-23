import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenRegisterComponent } from './ramen-register.component';

describe('RamenRegisterComponent', () => {
  let component: RamenRegisterComponent;
  let fixture: ComponentFixture<RamenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamenRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
