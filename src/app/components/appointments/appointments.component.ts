import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserAppointment } from '../../models/appointment.interface';
import { appointments } from '../../mocks/appointments-mock';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { patients } from '../../mocks/patients-mock';
import { doctors } from '../../mocks/doctors-mock';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatChipsModule,
    MatDivider,
    MatIcon,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  user!: User;

  constructor(private router: Router, private route: ActivatedRoute) {}

  userAppointments!: UserAppointment[];

  ngOnInit(): void {
    const userInfo = localStorage.getItem('token');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
      this.getAppointmetns();
    }
  }

  getAppointmetns() {
    if (this.user.role === 'Doctor') {
      this.userAppointments = appointments
        .filter((a) => a.doctorId === this.user.id)
        .map((a): UserAppointment => {
          return {
            site: a.site,
            address: a.address,
            date: a.date,
            patientName: patients.find((p) => a.patientId === p.id)?.name ?? '',
            procedure: a.procedure,
            state: a.state,
          };
        });
    } else if (this.user.role === 'Patient') {
      this.userAppointments = appointments
        .filter((a) => a.patientId === this.user.id)
        .map((a): UserAppointment => {
          return {
            site: a.site,
            address: a.address,
            date: a.date,
            doctorName: doctors.find((p) => a.doctorId === p.id)?.name ?? '',
            procedure: a.procedure,
            state: a.state,
          };
        });
    } else {
      this.userAppointments = appointments;
    }
  }

  nuevaCita() {
    this.router.navigate(['/home/appointments/new']);
  }
}
