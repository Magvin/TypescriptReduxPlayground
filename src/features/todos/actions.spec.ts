import { add, remove } from './actions';

describe('Actions',()=> {
    describe('ADD actions', ()=> {
        const title = 'New Todo';
        const result = add(title);

        it('should add a new todo, with type of todos/ADD ',()=> {
            expect(result.type).toBe('todos/ADD');
        })

        it('should add a new todo with passed title and return a payload with id and title ',()=> {
            expect(result.payload.id.length).toBeGreaterThan(0);
            expect(result.payload.title).toBe(title)
        })
    })
    describe('REMOVE actions',()=>{
        const id = '1ae946s'
        const result = remove(id);
        it('should return passed id to payload',()=> {
            expect(result.payload.id).toBe(id);
        })
        it('should return type of todos/REMOVE',()=> {
            expect(result.type).toBe('todos/REMOVE');
        })
    })
})