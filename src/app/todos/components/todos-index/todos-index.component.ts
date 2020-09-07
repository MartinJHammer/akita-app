import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../state/todos.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todos-index',
  templateUrl: './todos-index.component.html',
  styleUrls: ['./todos-index.component.scss']
})
export class ToDosIndexComponent implements OnInit {

  constructor(
    private todos: TodosService,
  ) { }

  ngOnInit(): void {
    this.todos.setFilter().completed();
    this.todos.getFilter().pipe(
      tap(x => console.log(x))
    ).subscribe();
    this.todos.updateFilter('plop');
  }
}
