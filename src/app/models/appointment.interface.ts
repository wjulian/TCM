export interface Appointment {
  id: number;
  date: Date;
  patientId: number;
  doctorId: number;
  procedure: string;
  site: string;
  address: string;
  state: 'Cancelada' | 'Asistida' | 'Pendiente'
}

export interface UserAppointment {
  date: Date;
  patientName?: string;
  doctorName?: string;
  procedure: string;
  site: string;
  address: string;
  state: 'Cancelada' | 'Asistida' | 'Pendiente'
}
