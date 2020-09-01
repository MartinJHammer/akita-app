import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { DogsState, DogsStore } from './dogs.store';

@Injectable({
    providedIn: 'root'
})
export class DogsQuery extends Query<DogsState> {
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

    constructor(protected store: DogsStore) {
        super(store);
    }
}
