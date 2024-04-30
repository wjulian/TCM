import { procedures } from './../../mocks/procedures-mock';
import { User } from './../../models/user.interface';
import { specialties } from './../../mocks/specialities-mock';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { appointments } from '../../mocks/appointments-mock';
import { Appointment } from '../../models/appointment.interface';
import { doctors } from '../../mocks/doctors-mock';
import { sites } from '../../mocks/sites-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-create-appointment',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  templateUrl: './edit-create-appointment.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './edit-create-appointment.component.scss',
})
export class EditCreateAppointmentComponent implements OnInit {
  title = '';
  specialties = specialties;
  procedures = procedures;
  sites = sites;

  specialityForm = this._formBuilder.group({
    speciality: ['', Validators.required],
  });

  procedureForm = this._formBuilder.group({
    procedure: ['', Validators.required],
  });

  dateForm = this._formBuilder.group({
    date: ['', Validators.required],
  });

  siteForm = this._formBuilder.group({
    site: ['', Validators.required],
  });
  isLinear = false;
  user!: User;

  minDate = new Date();

  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.title = 'Nueva cita';
    const userInfo = localStorage.getItem('token');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
    }
  }

  newAppointment() {
    if (
      this.specialityForm.valid &&
      this.dateForm.valid &&
      this.procedureForm.valid &&
      this.siteForm.valid
    ) {
      const date = this.dateForm.controls.date.value ?? '';
      const specialtyId = Number(
        this.specialityForm.controls.speciality.value ?? 0
      );
      const doctorId =
        doctors.find((d) => d.speciality === this.getSpeciality(specialtyId))
          ?.id ?? 0;
      const procedureId = Number(
        this.procedureForm.controls.procedure.value ?? 0
      );
      const siteId = Number(this.siteForm.controls.site.value ?? 0);
      const appointment: Appointment = this.createAppointment(
        siteId,
        date,
        doctorId,
        procedureId
      );
      appointments.push(appointment);
      this.router.navigate(['/home/appointments']);
    }
  }

  private createAppointment(
    siteId: number,
    date: string,
    doctorId: number,
    procedureId: number
  ): Appointment {
    return {
      address: this.getSiteAddress(siteId),
      date: new Date(date),
      doctorId: doctorId,
      patientId: this.user.id,
      procedure: this.getProcedure(procedureId),
      site: this.getSite(siteId),
      state: 'Pendiente',
      id: this.getNextAppointmentId(),
    };
  }

  private getSpeciality(specialityId: number) {
    return specialties.find((s) => s.key === specialityId)?.value ?? '';
  }

  private getProcedure(procedureId: number) {
    return procedures.find((p) => p.key === procedureId)?.value ?? '';
  }

  private getSite(siteId: number) {
    return sites.find((s) => s.key === siteId)?.value ?? '';
  }

  private getSiteAddress(siteId: number) {
    return sites.find((s) => s.key === siteId)?.address ?? '';
  }

  private getNextAppointmentId() {
    return appointments.length + 1;
  }
}
