import { Component, OnInit } from '@angular/core';
import {RegService} from '../reg.service';
import {Reg} from '../registration';


@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css']
})
export class ReglistComponent implements OnInit {

  regs: Reg[];

  constructor(private regService: RegService) { }

  ngOnInit(): void {
    this.getRegs();
  }

  getRegs(): void {
    this.regService.getRegs()
    .subscribe(regs => this.regs = regs);
  }

}
