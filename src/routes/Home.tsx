import * as React from 'react';

import { GenericList} from '../components/generic-list';
import TodoList from '../components/todoList';

export default () => {

  // React.useEffect(() => {}, [])
  const dummyDate= [
    {
    title: 'First title',
    id: '122das',
    completed: false,
    },
    {
      title: 'Second title',
      id: '14s',
      completed: true,
    },
]
  return (
    <section>
     <GenericList items={dummyDate} itemRenderer={item => <TodoList {...item} key={item.id}/>}/>
    </section>
  );
};
