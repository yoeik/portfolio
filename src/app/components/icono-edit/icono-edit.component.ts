import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Seccion } from "../../Interfaces/Seccion";

@Component({
  selector: 'app-icono-edit',
  templateUrl: './icono-edit.component.html',
  styleUrls: ['./icono-edit.component.css']
})
export class IconoEditComponent implements OnInit {
@Output() OnAdd = new EventEmitter();
@Output() OnEdit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    this.OnAdd.emit();
  }
  editItem(){
    this.OnEdit.emit();
    console.log('hola');
    
  }
  delItem(seccion: Seccion){

  }
}
