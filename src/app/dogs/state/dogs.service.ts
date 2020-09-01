import { DogsStore } from './dogs.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DogsService {
    constructor(private store: DogsStore) { }

    public updateName(newName: string): void {
        this.store.update({ name: newName });
    }
}
