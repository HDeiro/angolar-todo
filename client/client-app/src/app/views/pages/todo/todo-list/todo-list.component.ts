import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  filter: string;
  cards = [
    {
      title: 'A fantastic card title',
      content: 'A fantastic card content<br/><b>:)</b>',
      createdAt: new Date(),
      author: {
        name: 'Hugo'
      },
      options: [
        {
          label: 'Remove',
          callback: _ => console.log('Removed card')
        },
        {
          label: 'Make it private',
          callback: _ => console.log('Privating Card')
        }
      ]
    },
    {
      title: 'Learning Angular',
      content: 'Learning <i>angular</i><br/><b>:)</b>',
      createdAt: new Date(),
      author: {
        name: 'Hugo'
      },
      options: [
        {
          label: 'Remove',
          callback: _ => console.log('Removed card')
        },
        {
          label: 'Make it private',
          callback: _ => console.log('Privating Card')
        }
      ]
    },
    {
      title: 'Learning Go',
      content: 'Learning <i>GO</i><br/><b>:)</b>',
      createdAt: new Date(),
      author: {
        name: 'Hugo'
      },
      options: [
        {
          label: 'Remove',
          callback: _ => console.log('Removed card')
        },
        {
          label: 'Make it private',
          callback: _ => console.log('Privating Card')
        }
      ]
    },
    {
      title: 'Creating AnGolar',
      content: 'Creating Angolar '.repeat(100),
      createdAt: new Date(),
      author: {
        name: 'Hugo'
      }
    }
  ];

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

  constructor(private breakpointObserver: BreakpointObserver) {}
}
