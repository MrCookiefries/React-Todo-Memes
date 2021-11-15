import { useSelector } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

const TodoList = () => {
	const todos = useSelector((store) => store.todos);

	return (
		<div className="TodoList">
			<h2>Todos</h2>
			<p>Click on a todo to delete it.</p>
			<TodoForm />
			<section className="todos">
				{todos.map((t) => (
					<Todo key={t.id} {...t} />
				))}
			</section>
		</div>
	);
};

export default TodoList;
