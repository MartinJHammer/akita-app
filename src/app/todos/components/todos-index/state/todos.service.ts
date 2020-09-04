import { ToDosStore } from './ToDos.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToDosService {
    constructor(private store: ToDosStore) { }

    public updateName(newName: string): void {
        this.store.update({ name: newName });
    }
}
