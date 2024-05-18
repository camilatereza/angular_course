import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FirstComponent } from './components/1_first/first.component'
import { ShareComponent } from './components/2_share/share.component'
import { DirectivesComponent } from './components/3_directives/directives.component'
import { ConditionalComponent } from './components/4_conditional/conditional.component'
import { EventsComponent } from './components/5_events/events.component'
import { EmitterComponent } from './components/6_emitter/emitter.component'
import { ListComponent } from './components/7_list/list.component'
import { PipesComponent } from './components/9_pipes/pipes.component'
import { BindingComponent } from './components/10_binding/binding.component'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { ListDbComponent } from './components/13_list-db/list-db.component'
import { DetailComponent } from './components/14_detail/detail.component'

// Central de configurações
// Componentes do proprio angular e os criados
// Indica os componentes criados e dispinibiliza para uso
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ShareComponent,
    DirectivesComponent,
    ConditionalComponent,
    EventsComponent,
    EmitterComponent,
    ListComponent,
    PipesComponent,
    BindingComponent,
    ListDbComponent,
    DetailComponent,
  ],
  // Precisa importar os modulos extra aqui e as rotas
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
