import { Component, OnInit } from '@angular/core';
import { TEXTS } from '../../../mock-text';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  title1:string = "Acerca de mí"
  text1: string = "Soy un tipo curioso, aprendí muchas cosas en mi camino, hoy en día soy desarrollador web, me especializo en MySQL, Angular, Java con Spring Boot y Typescrypt."
  
  Texts = TEXTS; 
  
  add: boolean = false;
  edit: boolean = false;
  
  ngOnInit(): void {
  }
  adding(){
    this.add = !this.add
    this.edit? this.edit = false : this.edit
  }
  editing(){
    this.edit = !this.edit
    this.add? this.add = false: this.add
  }

}
