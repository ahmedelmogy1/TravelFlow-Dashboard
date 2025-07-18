import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisual } from './dashboard-visual';

describe('DashboardVisual', () => {
  let component: DashboardVisual;
  let fixture: ComponentFixture<DashboardVisual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVisual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVisual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
