import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../itodo-item';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;
  isComplete: boolean;
  description: string;
  item: ITodoItem = {title: '', description: ''};

  
  color: string;


  onSubmit(){

    this.fbApi.addItem({isComplete: false, ...this.item});
    this.item = {title: '', description: ''};


  }

  constructor(private fbApi:TodoApiService ) { 

  }

  ngOnInit() {

    this.color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

  }

}
