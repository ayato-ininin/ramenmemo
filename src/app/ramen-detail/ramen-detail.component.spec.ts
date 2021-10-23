import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenDetailComponent } from './ramen-detail.component';

describe('RamenDetailComponent', () => {
  let component: RamenDetailComponent;
  let fixture: ComponentFixture<RamenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamenDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
