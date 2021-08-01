import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { AppStore } from './app.store';

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppStore],
})
export default class AppComponent {
  todos$: Observable<Array<string>> = this.appStore.todo$;
  todosFormGroup: FormGroup = this.appService.getTodoFormGroup();

  constructor(
    private appService: AppService,
    private readonly appStore: AppStore
  ) {}

  add() {
    this.appStore.addTodo(this.todosFormGroup.getRawValue().todo);
    // this.todos.push(this.todosFormGroup.getRawValue().todo);
    this.todosFormGroup.reset();
  }

  remove(i: number) {
    this.appStore.removeTodo(i);
  }
}
