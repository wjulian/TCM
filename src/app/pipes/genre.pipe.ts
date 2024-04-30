import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../models/patient.interface';

@Pipe({
  name: 'genre',
  standalone: true
})
export class GenrePipe implements PipeTransform {

  transform(value: Genre | undefined, ...args: unknown[]): unknown {
    return value == 'M' ? 'Másculino' : 'Femenino';
  }

}
