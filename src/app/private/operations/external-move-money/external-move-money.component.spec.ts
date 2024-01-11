import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalMoveMoneyComponent } from './external-move-money.component';

describe('ExternalMoveMoneyComponent', () => {
  let component: ExternalMoveMoneyComponent;
  let fixture: ComponentFixture<ExternalMoveMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalMoveMoneyComponent]
    });
    fixture = TestBed.createComponent(ExternalMoveMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
