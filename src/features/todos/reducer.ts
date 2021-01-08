import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { Todo } from './models';
import * as actions from './actions';
import { ADD, REMOVE } from './constants';

export type TodosAction = ActionType<typeof actions>;

export type TodosState = Readonly<{
  todos: Todo[];
}>;
const initialState: TodosState = {
  todos: []
};

export default combineReducers<TodosState, TodosAction>({
  todos: (state = initialState.todos, action) => {
    switch (action.type) {
      case ADD:
        return [...state, action.payload];
      case REMOVE:
        return removeTodo(state, action.payload.id)
      default:
        return state;
    }
  },
});

const removeTodo = (state:Todo[], id:string) => {
    return state.filter(todo=> todo.id !== id);
}