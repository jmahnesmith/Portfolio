import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  covidClassifierSkills : string[] = ["Javascript", "Python", "Flask", "Sql", "HTML", "CSS"]
  plateSpinSkills: string[] = ["Java", "Android", "Yelp API"]
  beatSaberSkills: string[] = ["C#", "Beatsaber API"]
  boidSimulationSkills: string[] = ["Three.js", "Javascript", "HTML"]

  ngOnInit(): void {
  }

}
