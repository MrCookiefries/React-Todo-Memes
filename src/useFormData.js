import { useState } from "react";

const useFormData = (initialState = {}) => {
	const [formData, setFormData] = useState(initialState);

	const handleChange = evt => {
		const { name, value } = evt.target;
		setFormData(oldData => ({ ...oldData, [name]: value }));
	};

	const resetForm = () => setFormData(initialState);

	return [formData, handleChange, resetForm];
};

export default useFormData;
