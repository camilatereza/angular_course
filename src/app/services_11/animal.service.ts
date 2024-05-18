import { Injectable } from '@angular/core'
//Para requisição na "api"
import { HttpClient, HttpHandler } from '@angular/common/http'
//Faz a requisição ocorrer bem
import { Observable } from 'rxjs'

import { Animal } from './../interfaces_8/Animal'

@Injectable({
  providedIn: 'root',
})

// para requisições de banco, no geral, essa remoção visual seria no component mesmo (controler)
export class AnimalService {
  // ------------Requisição HTTP------------

  //url da api
  private apiUrl = 'http://localhost:3000/animals'
  //Para ter acesso aos metodos, get, pu, delete..
  constructor(private http: HttpClient) {}

  // ------------Service Mokado------------

  remove(animals: Animal[], animalRemoved: Animal) {
    return animals.filter((a) => animalRemoved.name != a.name)
  }

  // ------------Requisição HTTP------------

  //Puxando dados do banco
  getAllAnimals(): Observable<Animal[]> {
    //Para passar correto o padrão do Angular é usar o Observable e o get ter o mesmo tipo dele
    //Observa se o dado chega da API
    return this.http.get<Animal[]>(this.apiUrl)
  }

  // ------------HTTP Details------------
  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

  // ------------HTTP remove------------
  // Não precisa do Observavel pq não vai precisar preencher o sbscribe no comp
  removeAnimal(id?: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }
}
