import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  getTareas():string[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarer(tarea: string){
    const tareas = this.getTareas();
    tareas.push(tarea); //agrega la nueva tarea a tareas
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); //reemplaza lo que habia en el localstorage por tareas
  }

  eliminarTarea(index: number){
    const tareas = this.getTareas();
    tareas.splice(index, 1); //sacar la que indica el indice
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); //se reemplaza lo que habia en el localstorage con tareas
  } 
}
