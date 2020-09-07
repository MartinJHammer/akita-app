import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends Query<TodosState> {
    public currentFilter$ = this.select('filter');
    constructor(protected store: TodosStore) {
        super(store);
    }
}
