import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, completeTodo, handleDeleteTodo }) => {



    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    done={todo.done}
                    handleDeleteTodo={handleDeleteTodo}
                    completeTodo={completeTodo}
                />))}
        </ul>
    )
}

export default TodoList