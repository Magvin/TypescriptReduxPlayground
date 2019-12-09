import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { Todo } from './models';
import * as actions from './actions';
import { ADD } from './constants';

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
      default:
        return state;
    }
  },
});
