import { MatGridListModule } from '@angular/material/grid-list';
import { clinicalHistories } from '../../mocks/clinical-histories-mock';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { Patient } from '../../models/patient.interface';
import { ActivatedRoute } from '@angular/router';
import { patients } from '../../mocks/patients-mock';
import { User } from '../../models/user.interface';
import { ClinicalHistory } from '../../models/clinical-history.interface';
import { CommonModule } from '@angular/common';
import { GenrePipe } from '../../pipes/genre.pipe';

@Component({
  selector: 'app-clinical-history',
  standalone: true,
  imports: [
    MatDivider,
    MatCard,
    MatCardHeader,
    MatCardContent,
    CommonModule,
    GenrePipe,
    MatGridListModule
  ],
  templateUrl: './clinical-history.component.html',
  styleUrl: './clinical-history.component.scss',
})
export class ClinicalHistoryComponent implements OnInit {
  patient!: Patient | undefined;
  user!: User;
  clinicalHistory!: ClinicalHistory | undefined;

  borderTile = 'border: solid 1px rgb(141, 141, 141)';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const userInfo = localStorage.getItem('token');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
      this.getClinicHistory();
    }
  }

  getClinicHistory() {
    this.clinicalHistory = clinicalHistories.find(
      (h) => h.patientId === this.user.id
    );
    if (this.clinicalHistory) {
      this.patient = patients.find(
        (p) => p.id === this.clinicalHistory?.patientId
      );
    }
  }
}
