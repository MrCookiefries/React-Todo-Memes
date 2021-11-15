import useFormData from "../useFormData";
import FormField from "../components/FormField";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import "./TodoForm.css";

const TodoForm = () => {
	const initialState = {
		task: "",
	};
	const labels = {
		task: "Task",
	};

	const [formData, handleChange, resetForm] = useFormData(initialState);

	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		resetForm();
		dispatch({ type: "todos/create", payload: { ...formData, id: uuidV4() } });
	};

	return (
		<form onSubmit={handleSubmit} className="TodoForm">
			{Object.entries(formData).map(([k, v]) => (
				<FormField
					handleChange={handleChange}
					name={k}
					value={v}
					label={labels[k] || k}
					key={k}
				/>
			))}
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
