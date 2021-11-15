import "./FormField.css";

const FormField = ({
	label,
	name,
	value,
	handleChange,
	type = "text",
	required = true,
}) => (
	<label className="FormField">
		{label}
		<input
			onChange={handleChange}
			name={name}
			value={value}
			type={type}
			required={required}
		/>
	</label>
);

export default FormField;
