import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  listOfSkills : string[] = [
    "Angular (v13+)",
  "TypeScript",
  "Dotnet Core",
  "DynamoDB",
  "Microservices",
  "Serverless Architecture"]
  constructor() { }

  ngOnInit(): void {
  }

}
