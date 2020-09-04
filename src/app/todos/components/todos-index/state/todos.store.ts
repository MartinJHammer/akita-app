import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ToDosState {
    name: string;
    age: number;
}

export function createInitialState(): ToDosState {
    return {
        name: 'Bobby',
        age: 12
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'ToDos' })
export class ToDosStore extends Store<ToDosState> {
    constructor() {
        super(createInitialState());
    }
}
