import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateAppointmentComponent } from './edit-create-appointment.component';

describe('EditCreateAppointmentComponent', () => {
  let component: EditCreateAppointmentComponent;
  let fixture: ComponentFixture<EditCreateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCreateAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
