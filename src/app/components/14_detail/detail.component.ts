import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Animal } from '../../interfaces_8/Animal'
import { AnimalService } from '../../services_11/animal.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  animal?: Animal

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
  ) {
    this.getAnimal()
  }

  getAnimal(): void {
    //O id vem da URL
    const id = Number(this.route.snapshot.paramMap.get('id'))

    //preencher a propriedade com o animal que vem do service
    this.animalService.getAnimal(id).subscribe((a) => (this.animal = a))
  }

  // ------------HTTP Remover------------
  remove(a: Animal): void {
    // A animação front para remover da tela
    if (this.animal?.name != a.name) {
      this.animal = a
    }
    // O subscribe é a maneira do angular dizer que foi feito algo
    this.animalService.removeAnimal(a.id).subscribe()
  }
}
