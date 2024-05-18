import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FirstComponent } from './components/1_first/first.component'
import { ListComponent } from './components/7_list/list.component'
import { ListDbComponent } from './components/13_list-db/list-db.component'
import { DetailComponent } from './components/14_detail/detail.component'

//Define todas as rotas
const routes: Routes = [
  // path: sem nada seria a / da aplicação, não precisa definir isso
  // component: o componente ao qual a rota pertence
  { path: '', component: FirstComponent },
  { path: 'list', component: ListComponent },
  { path: 'db', component: ListDbComponent },
  // Para buscar pelo id
  { path: 'list/:id', component: DetailComponent },
]

//Para definir configurações
//Decorator para a classe
@NgModule({
  declarations: [],
  // diz que as rotas começam da raiz (app)
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

//Precisa informar isso no aap.modules.ts
export class AppRoutingModule {}
