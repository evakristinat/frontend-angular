import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reg } from './registration';

@Injectable({
  providedIn: 'root',
})
export class RegService {
  private regsUrl = 'api/regs';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRegs(): Observable<Reg[]> {
    return this.http.get<Reg[]>(this.regsUrl);
  }

  addReg(reg: Reg): Observable<Reg> {
    return this.http.post<Reg>(this.regsUrl, reg, this.httpOptions);
  }
}
