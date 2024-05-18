import { Component, Input } from '@angular/core'
// input para pegar o dado que o pai compartilhou

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
})
export class ShareComponent {
  //inicializar o dado que o pai tá mandando
  //O dado pode mudar de nome, lá no pai era userName e aqui é name
  @Input() name: string = ''

  //inicializando um objeto e 'zerando' com o !:
  @Input() login!: { email: string; role: string }
}
