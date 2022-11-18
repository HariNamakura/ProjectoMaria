import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorRegisterComponent } from './monitor-register.component';

describe('MonitorRegisterComponent', () => {
  let component: MonitorRegisterComponent;
  let fixture: ComponentFixture<MonitorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
