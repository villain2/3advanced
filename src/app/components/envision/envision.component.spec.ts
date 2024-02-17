import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvisionComponent } from './envision.component';

describe('EnvisionComponent', () => {
  let component: EnvisionComponent;
  let fixture: ComponentFixture<EnvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
