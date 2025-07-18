import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTrip } from './ai-trip';

describe('AiTrip', () => {
  let component: AiTrip;
  let fixture: ComponentFixture<AiTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
