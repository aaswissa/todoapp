import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../itodo-item';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  item: ITodoItem = {title: '', description: ''};

  onSubmit(){

    this.fbApi.addItem(this.item);
    this.item = {title: '', description: ''};

  }

  constructor(private fbApi:TodoApiService ) { }

  ngOnInit() {


  }

}
