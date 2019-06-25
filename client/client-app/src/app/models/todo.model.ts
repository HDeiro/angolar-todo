import { User } from './user.model';
import { TodoAction } from './todo-action.model';

export class Todo {

    title: string;
    content: string;
    author: User;
    createdAt: Date;
    actions: Array<TodoAction>;

    
}
