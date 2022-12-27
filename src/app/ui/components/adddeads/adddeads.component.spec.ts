import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeadsComponent } from './adddeads.component';

describe('AdddeadsComponent', () => {
  let component: AdddeadsComponent;
  let fixture: ComponentFixture<AdddeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
