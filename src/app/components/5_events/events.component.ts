import { Component } from '@angular/core'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  // Variavel que implica na condicional da mensagem
  show: boolean = false

  // Metodo que gera o evento no html
  showMessage(): void {
    //toggle é a troca de status para não precisar de muita coisa
    this.show = !this.show
  }

  // Numero que vai ser mudado
  myNumber: number = 0

  // evento emitido e o que ele vai fazer
  onHandleNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10)
    // console.log('Mudou')
  }
}
