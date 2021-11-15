import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ task, id }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch({ type: "todos/remove", payload: id });

	return (
		<p className="Todo" onClick={handleClick}>
			{task}
		</p>
	);
};

export default Todo;
