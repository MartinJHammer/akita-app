import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ToDosState, ToDosStore } from './ToDos.store';

@Injectable({
    providedIn: 'root'
})
export class ToDosQuery extends Query<ToDosState> {
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

    constructor(protected store: ToDosStore) {
        super(store);
    }
}
