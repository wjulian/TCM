
export interface User {
  email: string;
  name: string;
  password: string;
  role: 'Admin' | 'Doctor' | 'Patient'
  id: number;
}

export interface TokenSession extends User {
  expiration: number
}
