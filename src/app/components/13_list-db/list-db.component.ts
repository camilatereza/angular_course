import { Component } from '@angular/core'
import { Animal } from '../../interfaces_8/Animal'
import { AnimalService } from '../../services_11/animal.service'

@Component({
  selector: 'app-list-db',
  templateUrl: './list-db.component.html',
})
export class ListDbComponent {
  animals: Animal[] = []

  constructor(private animalService: AnimalService) {
    this.getAnimals()
  }

  getAnimals(): void {
    // Quando o evento é observavel não pode passar o retorno direto pra lista
    // O Subscribe o evento é concretizado, espera o evento pra depois fazer algo
    // Tipo await
    this.animalService
      .getAllAnimals()
      .subscribe((animalsDb) => (this.animals = animalsDb))
  }
}
