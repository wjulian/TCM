import { ClinicalHistory } from '../models/clinical-history.interface';

export const ClinicalHistories = [
  {
    patientId: 1, // Asigna un ID único para Ana Pérez
    illness: ['Diabetes tipo 2', 'Hipertensión arterial'],
    currentMedication: [
      'Metformina 500mg dos veces al día',
      'Losartán 50mg una vez al día',
    ],
    visit: [
      {
        date: new Date('2024-04-27'),
        reason: 'Dolor abdominal persistente',
        physicalExam:
          'Presión arterial: 130/85 mmHg\nFrecuencia cardíaca: 78 latidos por minuto\nTemperatura: 37.2°C\nAbdomen: Dolor a la palpación en el cuadrante inferior derecho',
        diagnosis:
          'Se sospecha de apendicitis. Se requieren pruebas adicionales para confirmar el diagnóstico.',
        plan: [
          'Solicitar ultrasonido abdominal',
          'Referir a un cirujano general para evaluación',
          'Control del dolor con medicación prescrita',
        ],
      },
    ],
  },
  {
    patientId: 2,
    illness: [],
    currentMedication: [],
    visit: [
      {
        date: new Date('2024-04-27'),
        reason: 'Dolor abdominal persistente',
        physicalExam:
          'Presión arterial: 130/85 mmHg\nFrecuencia cardíaca: 78 latidos por minuto\nTemperatura: 37.2°C\nAbdomen: Dolor a la palpación en el cuadrante inferior derecho',
        diagnosis:
          'Se sospecha de apendicitis. Se requieren pruebas adicionales para confirmar el diagnóstico.',
        plan: [
          'Solicitar ultrasonido abdominal',
          'Referir a un cirujano general para evaluación',
          'Control del dolor con medicación prescrita',
        ],
      },
    ],
  },
  {
    patientId: 3,
    illness: ['Hipertensión arterial'],
    currentMedication: ['Enalapril 10mg una vez al día'],
    visit: [
      {
        date: new Date('2024-04-27'),
        reason: 'Control de hipertensión',
        physicalExam:
          'Presión arterial: 140/90 mmHg\nFrecuencia cardíaca: 72 latidos por minuto\nPeso: 80 kg\nAltura: 175 cm',
        diagnosis:
          'Hipertensión arterial no controlada. Se requiere ajuste de medicación.',
        plan: [
          'Aumentar dosis de enalapril a 20mg una vez al día',
          'Monitorear presión arterial regularmente',
          'Recomendar cambios en la dieta y actividad física',
        ],
      },
    ],
  },
  {
    patientId: 4,
    illness: ['Historial médico vacío'],
    currentMedication: ['Sin medicación actual'],
    visit: [
      {
        date: new Date('2024-05-12'),
        reason: 'Consulta de rutina',
        physicalExam:
          'Presión arterial: 120/80 mmHg\nFrecuencia cardíaca: 70 latidos por minuto\nTemperatura: 36.8°C\nAbdomen: Sin hallazgos anormales',
        diagnosis: 'Estado general de salud óptimo',
        plan: [
          'Continuar con seguimiento anual',
          'Promover hábitos de vida saludables',
        ],
      },
    ],
  },
];
