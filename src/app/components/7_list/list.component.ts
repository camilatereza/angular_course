import { Component } from '@angular/core'
import { Animal } from '../../interfaces_8/Animal'

import { AnimalService } from '../../services_11/animal.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  animals = [
    { name: 'Caramelo', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Pluto', type: 'Dog' },
    { name: 'Bob', type: 'Horse' },
  ]

  //Envento para mostrar idade do animal
  animalDetails = ''

  // código alinhado a interface
  animalsClass: Animal[] = [
    { name: 'Caramelo', type: 'Dog', age: 10 },
    { name: 'Tom', type: 'Cat', age: 5 },
    { name: 'Pluto', type: 'Dog', age: 2 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ]

  constructor(private animalService: AnimalService) {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    // usando o metodo do service e passando o dado e o 'banco de dados' que usamos
    this.animalsClass = this.animalService.remove(this.animalsClass, animal)
    // console.log('removendo animal')
  }
}
