import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

export interface TodosState extends EntityState<Todo, number> {
    filter: string;
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'todos', idKey: 'rowNumber' })
export class TodosStore extends EntityStore<TodosState> {
    constructor() {
        super({ filter: 'ALL' });
    }
}
