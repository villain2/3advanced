import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsInspirationComponent } from './methods-inspiration.component';

describe('MethodsInspirationComponent', () => {
  let component: MethodsInspirationComponent;
  let fixture: ComponentFixture<MethodsInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodsInspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodsInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
