import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeAdvancedComponent } from './three-advanced.component';

describe('ThreeAdvancedComponent', () => {
  let component: ThreeAdvancedComponent;
  let fixture: ComponentFixture<ThreeAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
