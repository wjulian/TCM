export interface ClinicalHistory {
  patientId: number,
  illness: string[],
  currentMedication: string[],
  visit: Visit[]
}

export interface Visit {
  date: Date,
  reason: string,
  physicalExam: string,
  diagnosis: string,
  plan: string[]
}
