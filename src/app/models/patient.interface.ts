export interface Patient {
  id: number,
  name:string,
  age: number,
  genre: Genre,
  address: string,
  phoneNumber: number
}

export type Genre = 'M' | 'F';
