import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamensComponent } from './ramens.component';

describe('RamensComponent', () => {
  let component: RamensComponent;
  let fixture: ComponentFixture<RamensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
