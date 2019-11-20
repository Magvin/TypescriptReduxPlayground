import cuid from 'cuid';
import { action } from 'typesafe-actions';

import { TodosFilter, Todo } from './models';
import { ADD, CHANGE_FILTER } from './constants';

export const add = (title: string) =>
  action(ADD, {
    title,
    id: cuid(),
    completed: false,
  } as Todo);

export const changeFilter = (filter: TodosFilter) =>
  action(CHANGE_FILTER, filter);
