import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  cardModel = {
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
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return [
          this.cardModel,
          this.cardModel,
          this.cardModel,
          this.cardModel
        ];
      }
    )
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
