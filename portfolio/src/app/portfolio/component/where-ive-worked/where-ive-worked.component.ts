import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-ive-worked',
  templateUrl: './where-ive-worked.component.html',
  styleUrls: ['./where-ive-worked.component.scss']
})
export class WhereIveWorkedComponent implements OnInit {

  wellrightTechnologies : string[] = ["Angular", "NgRx", "AWS", "Serverless", ".NET Core"]
  changeisTechnologies : string[] = ["jQuery", "Microsoft Server SQL", "Palentir", "Javascript", ".NET Core"]
  ninthJudicialTechnologies : string[] = [".NET Framework", "Pervasive SQL", "WinForms"]

  constructor() { }

  ngOnInit(): void {
  }

}
