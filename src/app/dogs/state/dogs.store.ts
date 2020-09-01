import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface DogsState {
    name: string;
    age: number;
}

export function createInitialState(): DogsState {
    return {
        name: 'Bobby',
        age: 12
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'dogs' })
export class DogsStore extends Store<DogsState> {
    constructor() {
        super(createInitialState());
    }
}
