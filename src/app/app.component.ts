import { Component } from '@angular/core'

// Onde tem as config e codigos de logica dos componentes
// tipo controller
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // dado que quero compartilhar criado no pai
  userName: string = 'Joaquim'

  userLogin = {
    email: 'joaquim@mail.com',
    role: 'admin',
  }

  title = 'front-curso'
}
