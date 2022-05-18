import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { Reg } from '../registration';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  regs: Reg[];

  constructor(private regService: RegService) {}

  ngOnInit(): void {}

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name || !email) {
      return;
    }
    this.regService.addReg({ name, email } as Reg).subscribe((reg) => {
      this.regs.push(reg);
    });
  }
}
