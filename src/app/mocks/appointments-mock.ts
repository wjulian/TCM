import { Appointment } from "../models/appointment.interface"
export const appointments: Appointment[] = [
  { id: 1, date: new Date('2024-05-01T09:00:00'), patientId: 1, doctorId: 10, procedure: 'Ultrasonido Abdominal', site: 'Hospital General de Ciudad Real', address: 'Calle Real 123, Ciudad Real', state: 'Pendiente' },
  { id: 2, date: new Date('2024-05-02T10:30:00'), patientId: 2, doctorId: 11, procedure: 'Consulta General', site: 'Clínica San Juan', address: 'Avenida de la Paz 456, San Juan', state: 'Pendiente' },
  { id: 3, date: new Date('2024-05-03T14:00:00'), patientId: 3, doctorId: 12, procedure: 'Examen de la Vista', site: 'Hospital General de Ciudad Real', address: 'Calle Real 123, Ciudad Real', state: 'Cancelada' },
  { id: 4, date: new Date('2024-05-04T16:00:00'), patientId: 4, doctorId: 13, procedure: 'Consulta Dental', site: 'Clínica San Juan', address: 'Avenida de la Paz 456, San Juan', state: 'Pendiente' },
  { id: 5, date: new Date('2024-05-05T11:00:00'), patientId: 5, doctorId: 14, procedure: 'Consulta de Dermatología', site: 'Hospital Santa María', address: 'Plaza Mayor 789, Santa María', state: 'Asistida' },
  { id: 6, date: new Date('2024-05-06T15:30:00'), patientId: 6, doctorId: 15, procedure: 'Consulta de Cardiología', site: 'Hospital Santa María', address: 'Plaza Mayor 789, Santa María', state: 'Pendiente' },
  { id: 7, date: new Date('2024-05-07T09:30:00'), patientId: 7, doctorId: 16, procedure: 'Consulta de Ginecología', site: 'Hospital General de Ciudad Real', address: 'Calle Real 123, Ciudad Real', state: 'Pendiente' },
  { id: 8, date: new Date('2024-05-08T10:00:00'), patientId: 8, doctorId: 17, procedure: 'Consulta de Pediatría', site: 'Clínica San Juan', address: 'Avenida de la Paz 456, San Juan', state: 'Asistida' },
  { id: 9, date: new Date('2024-05-09T14:30:00'), patientId: 9, doctorId: 18, procedure: 'Consulta de Neurología', site: 'Hospital Santa María', address: 'Plaza Mayor 789, Santa María', state: 'Cancelada' },
  { id: 10, date: new Date('2024-05-10T16:30:00'), patientId: 10, doctorId: 19, procedure: 'Consulta de Psiquiatría', site: 'Hospital General de Ciudad Real', address: 'Calle Real 123, Ciudad Real', state: 'Pendiente' },
  { id: 11, date: new Date('2024-05-11T11:30:00'), patientId: 11, doctorId: 20, procedure: 'Consulta de Ortopedia', site: 'Clínica San Juan', address: 'Avenida de la Paz 456, San Juan', state: 'Asistida' },
  { id: 12, date: new Date('2024-05-12T15:00:00'), patientId: 12, doctorId: 21, procedure: 'Consulta de Urología', site: 'Hospital Santa María', address: 'Plaza Mayor 789, Santa María', state: 'Cancelada' },
  { id: 13, date: new Date('2024-05-13T09:30:00'), patientId: 13, doctorId: 22, procedure: 'Consulta de Endocrinología', site: 'Hospital General de Ciudad Real', address: 'Calle Real 123, Ciudad Real', state: 'Pendiente' },
  { id: 14, date: new Date('2024-05-14T10:00:00'), patientId: 14, doctorId: 23, procedure: 'Consulta de Gastroenterología', site: 'Clínica San Juan', address: 'Avenida de la Paz 456, San Juan', state: 'Asistida' },
  { id: 15, date: new Date('2024-05-15T14:30:00'), patientId: 15, doctorId: 24, procedure: 'Consulta de Otorrinolaringología', site: 'Hospital Santa María', address: 'Plaza Mayor 789, Santa María', state: 'Pendiente' }
]
