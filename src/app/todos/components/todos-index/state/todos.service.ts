import { TodosStore } from './todos.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(private store: TodosStore) { }

    public updateName(newName: string): void {
        this.store.update({ name: newName });
    }
}
