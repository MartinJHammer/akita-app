import {DogsService} from './state/dogs.service';
import { DogsQuery } from './state/dogs.query';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  public name$: Observable<string>;

  constructor(
    private dogQueries: DogsQuery,
    private dogsService: DogsService
    ) { }

  ngOnInit(): void {
    this.name$ = this.dogQueries.selectName$;
  }

  public updateName(name: string): void {
    this.dogsService.updateName(name ? name : '');
  }

}
