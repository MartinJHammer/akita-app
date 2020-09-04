import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends Query<TodosState> {
    public allState$ = this.select();
    public selectName$ = this.select('name');

    // Returns { name, age }
    public multiProps$ = this.select(['name', 'age']);

    // Returns [name, age]
    multiPropsCallback$ = this.select(
        [
            state => state.name,
            state => state.age
        ]
    );

    constructor(protected store: TodosStore) {
        super(store);
    }
}
