import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoUpdated, onTodoDeleted }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onTodoUpdated={onTodoUpdated}
          onTodoDeleted={onTodoDeleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
