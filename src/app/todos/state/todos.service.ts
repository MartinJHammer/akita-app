import { TodosStore } from './todos.store';
import { Injectable } from '@angular/core';
import { TodosQuery } from './todos.query';
import { Observable } from 'rxjs';

class Filters {
    constructor(private store: TodosStore) {}

    public completed(): void {
        this.store.update({ filter: 'COMPLETED' });
    }

    public uncompleted(): void {
        this.store.update({ filter: 'UNCOMPLETED' });
    }
}

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(
        private store: TodosStore,
        private query: TodosQuery
    ) { }

    public setFilter(): Filters {
        return new Filters(this.store);
    }

    public getFilter(): Observable<string> {
        return this.query.currentFilter$;
    }
}
