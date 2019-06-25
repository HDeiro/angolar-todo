import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/api/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  isInViewMode = true;
  filter: string;
  cards: Array<Todo> = [];

  constructor(
    private todoService: TodoService
  ) {}

  filterCards() {
    return this.cards.filter(card => 
      this.contains(card.title, this.filter)
      || this.contains(card.author.name, this.filter)
      || this.contains(card.content, this.filter)
      || this.contains(card.createdAt.toString(), this.filter)
    )
  }

  contains(filtered, filter) {
    return filter ? filtered.toLowerCase().indexOf(filter.toLowerCase()) > -1 : true;
  }

  ngOnInit() {
    this.todoService.getToDos().subscribe(cards => this.cards = cards);
  }
}
