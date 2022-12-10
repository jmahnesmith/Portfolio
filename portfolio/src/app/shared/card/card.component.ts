import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image : string = "";
  @Input() title : string = "";
  @Input() subTitle : string = "";
  @Input() buttonText : string = "";
  @Input() href : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
