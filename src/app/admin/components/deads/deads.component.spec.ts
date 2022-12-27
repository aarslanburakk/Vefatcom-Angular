import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadsComponent } from './deads.component';

describe('DeadsComponent', () => {
  let component: DeadsComponent;
  let fixture: ComponentFixture<DeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
