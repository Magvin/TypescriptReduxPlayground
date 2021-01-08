import {
  todosReducer as reducer,
  todosActions as actions,
  TodosState,
} from './';

import  combineReducers  from './reducer';
import { add, remove } from './actions';
/**
 * FIXTURES
 */
const getInitialState = (initial?: Partial<TodosState>) =>
  reducer(initial as TodosState, {} as any);

/**
 * STORIES
 */
describe('Todos Stories', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      const initialState = getInitialState();
      expect(initialState).toMatchSnapshot();
    });
  });
  describe('combineReducers',()=> {
    const initialState = getInitialState();
      
    it('should add a new todo to the state',()=> {
      const action = add('some title')
      const result = combineReducers(initialState,action )
      expect(result.todos.length).toBeGreaterThan(0)
    })
    it('should remove a todo with passed id',()=>{
      const newInitialState ={ 
        todos:[
          { 
            title: 'some title',
            id: 'ckjo8xkfu0000gksngd6z34fe',
            completed: false 
          },
          {
            title: 'Second title',
            id: '54sdae',
            completed: false 
          }
          
      ]
      }
      const action = remove('ckjo8xkfu0000gksngd6z34fe');
      const result = combineReducers(newInitialState,action);
      expect(result.todos).toStrictEqual([{
        title: 'Second title',
        id: '54sdae',
        completed: false 
      }])
    })
  })
});