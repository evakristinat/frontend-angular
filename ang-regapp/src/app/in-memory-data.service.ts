import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reg } from './registration';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const regs = [
      {id: 1, name: 'Eeva', email: 'eeva@mail.com'}
    ];
    return { regs };
  }

  genId(regs: Reg[]): number {
    return regs.length > 0
      ? Math.max(...regs.map((reg) => reg.id)) + 1 : 1;
  }
}
