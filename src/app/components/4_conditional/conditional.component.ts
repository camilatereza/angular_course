import { Component } from '@angular/core'

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
})
export class ConditionalComponent {
  canShow: boolean = true

  name: string = 'Matheus'
  nameJ: string = 'Joaquim'
}
