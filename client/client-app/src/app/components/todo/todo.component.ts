import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input('model') model: object;
  editableModel: object;
  isFullscreenModeActivated: boolean = false;

  constructor() { 
    
  }

  ngOnInit() { 

  }

  toggleFullscreenMode() {
    this.editableModel = this.model;
    this.isFullscreenModeActivated = !this.isFullscreenModeActivated;
  }
}
