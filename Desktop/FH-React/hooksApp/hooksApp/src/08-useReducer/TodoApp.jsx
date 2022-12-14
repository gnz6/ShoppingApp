import React from 'react'
import { useTodos } from '../hooks/useTodos'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { todoReducer } from './todoReducer'


const TodoApp = () => {

    
    const { todos, handleDeleteTodo, completeTodo, onNewTodo , allTodos, pending} = useTodos(todoReducer)


    return (
        <>
            <h1>TodoApp </h1>
            <h3> All Tasks : {allTodos}, Pending: {pending}</h3>
            <hr />

            <div className="row">
                <div className='col-7'>
                    <TodoList className='list-group'
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        completeTodo= {completeTodo}
                    />
                </div>
                <div className='col-5'>
                    <h4> Add Todo </h4>
                    <hr />
                    <AddTodo
                        onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoApp