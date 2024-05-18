import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
})
export class EmitterComponent {
  //eventEmitter é um generic então precisa de <>
  @Output() handleNumber: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.handleNumber.emit()
    // console.log('Mudou o número')
  }
}
