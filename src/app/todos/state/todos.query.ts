import { Query } from '@datorama/akita';
import { TodosState, todosStore } from './todos.store';

class TodosQuery extends Query<TodosState> {
    constructor() { super(todosStore); }
}
export const todosQuery = new TodosQuery();
