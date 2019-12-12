import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../itodo-item';
import { TodoApiService } from '../todo-api.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: ITodoItem[] = []

  constructor(private fbApi: TodoApiService) { }

  ngOnInit() {

    this.fbApi.items.subscribe(items => this.todoList = items);

  }

}
