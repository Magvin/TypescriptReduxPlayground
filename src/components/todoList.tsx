import * as React from 'react';
import { Todo } from '../features/todos/models';

const TodoList =(props:Todo):React.ReactElement => {
    console.log(props)
    return (
        <div className='list'>
            <h4 style={{
                textDecoration: props.completed ? 'line-through' : 'unset'
            }}>{props.title}</h4>
            
        </div>
    )
}
export default TodoList;