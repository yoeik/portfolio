import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Mocks/mock-education';
import { Edu } from '../../Interfaces/Edu';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  edu: Edu[] = Education
  ngOnInit(): void {
  }

}
