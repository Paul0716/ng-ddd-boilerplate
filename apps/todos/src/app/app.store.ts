import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface AppState {
  todo: Array<string>;
}

const initialState: AppState = {
  todo: [],
};

@Injectable()
export class AppStore extends ComponentStore<AppState> {
  readonly todo$ = this.select((state) => state.todo);
  constructor() {
    super(initialState);
  }

  readonly addTodo = this.updater((state, todo: string) => {
    state.todo.push(todo);
    return state;
  });

  readonly removeTodo = this.updater((state, index: number) => {
    state.todo.splice(index, 1);
    return state;
  });
}
