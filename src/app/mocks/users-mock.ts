import { User } from "../models/user.interface";

export const users : User[] = [
  {
    email: 'admin@tcm.com',
    name: 'Admin',
    password: 'PoliGran',
    id: 555,
    role: 'Admin',
  },
  {
    email: 'ana.perez@tcm.com',
    name: 'Ana Pérez',
    password: 'PoliGran',
    id: 1,
    role: 'Patient',
  },
  {
    email: 'juan.rodriguez@tcm.com',
    name:'Juan Rodriguez',
    password: 'PoliGran',
    id: 2,
    role: 'Patient',
  },
  {
    email: 'maria.gonzalez@tcm.com',
    name:'maria González',
    password: 'PoliGran',
    id: 3,
    role: 'Patient',
  },
  {
    email: 'jose.garcia@tcm.com',
    name:'Jose García',
    password: 'PoliGran',
    id: 10,
    role: 'Doctor',
  },
  {
    email: 'miguel.lopez@tcm.com',
    name:'Miguel Lopéz',
    password: 'PoliGran',
    id: 13,
    role: 'Doctor',
  },
  {
    email: 'patricia.sanchez@tcm.com',
    name:'Patricia Sanchéz',
    password: 'PoliGran',
    id: 16,
    role: 'Doctor',
  }
]
