import { useDispatch } from "react-redux";
import FormField from "../components/FormField";
import useFormData from "../useFormData";
import { v4 as uuidV4 } from "uuid";
import "./MemeForm.css";

const MemeForm = () => {
	const initialState = {
		topText: "",
		bottomText: "",
		photoUrl: "",
	};

	const labels = {
		topText: "Top Text",
		bottomText: "Bottom Text",
		photoUrl: "Image Link",
	};

	const [formData, handleChange, resetForm] = useFormData(initialState);

	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		resetForm();
		const id = uuidV4();
		dispatch({ type: "memes/create", payload: { ...formData, id } });
	};

	return (
		<form className="MemeForm" onSubmit={handleSubmit}>
			{Object.entries(formData).map(([k, v]) => (
				<FormField
					handleChange={handleChange}
					value={v}
					label={labels[k] || k}
					name={k}
					key={k}
					type={k === "photoUrl" ? "url" : "text"}
				/>
			))}
			<button type="submit">Create</button>
		</form>
	);
};

export default MemeForm;
