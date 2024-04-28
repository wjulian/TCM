import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { Patient } from '../models/patient.interface';
import { ActivatedRoute } from '@angular/router';
import { patients } from '../mocks/patients-mock';

@Component({
  selector: 'app-clinical-history',
  standalone: true,
  imports: [MatDivider, MatCard, MatCardHeader, MatCardContent],
  templateUrl: './clinical-history.component.html',
  styleUrl: './clinical-history.component.scss',
})
export class ClinicalHistoryComponent implements OnInit {
  patient: Patient | undefined;

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    const patientId = this.router.snapshot.paramMap.get('patientId');
    if(patientId){
      this.patient = patients.find((p) => p.id === Number(patientId));
      console.log(this.patient);
    }
  }
}
