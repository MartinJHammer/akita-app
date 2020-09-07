import { TodosState, todosStore } from './todos.store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todosQuery } from './todos.query';

class Filters {
    public completed(): void {
        todosStore.update({ filter: 'COMPLETED' });
    }

    public uncompleted(): void {
        todosStore.update({ filter: 'UNCOMPLETED' });
    }
}

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    private allState$: Observable<TodosState> = todosQuery.select();
    private currentFilters$: Observable<string> = todosQuery.select(state => state.filter);

    constructor() { }

    public getState(): Observable<TodosState> {
        return this.allState$;
    }

    public setFilter(): Filters {
        return new Filters();
    }

    public getFilter(): Observable<string> {
        return this.currentFilters$;
    }

    public updateFilter(filter: string): void {
        todosStore.update(state => {
            state.filter = filter;
        });
    }
}
