import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Projects= Projects 

}
