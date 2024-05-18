import { Component, OnInit } from '@angular/core'

//Isso é um decorator
// São as configurações que realiza para o componente
@Component({
  selector: 'app-first', //usa o selector para importar e usar o componente
  templateUrl: './first.component.html', //caminho para o template do comp
  styleUrl: './first.component.css',
})
export class FirstComponent implements OnInit {
  name: string = 'Camila'

  course = {
    name: 'Ciência da Computação',
    yearConclusion: 2022,
  }

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
