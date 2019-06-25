import { User } from './user.model';
import { TodoAction } from './todo-action.model';

export class Todo {

    static preloadedTodoActions = {
        'remove' :  new TodoAction({
           label: 'Remove',
           callback: () => console.log('Remove action has been called')
        }),
        'privatize' :  new TodoAction({
            label: 'Make it private',
            callback: () => console.log('Privatize action has been called')
        })
    }

    title: string;
    content: string;
    author: User;
    createdAt: Date;
    actions: Array<TodoAction>;

    constructor({title, content, author, createdAt, actions}) {
        this.title = title; 
        this.content = content;
        this.author = author;
        this.createdAt = new Date(createdAt);

        if(actions) {
            this.actions = actions
                .map(action => Todo.preloadedTodoActions[action])
                .filter(action => !!action);
        }
    }    
}
