import cuid from 'cuid';
import { action } from 'typesafe-actions';

import { Todo } from './models';
import { ADD } from './constants';

export const add = (title: string) =>
  action(ADD, {
    title,
    id: cuid(),
    completed: false,
  } as Todo);

