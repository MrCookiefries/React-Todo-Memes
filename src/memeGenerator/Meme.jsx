import { useDispatch } from "react-redux";
import "./Meme.css";

const Meme = ({
	topText = "Top Text",
	bottomText = "Bottom Text",
	photoUrl,
	id,
}) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch({ type: "memes/remove", payload: id });
	};

	return (
		<figure className="Meme" onClick={handleClick}>
			<p>{topText}</p>
			<img src={photoUrl} alt="meme" />
			<p>{bottomText}</p>
		</figure>
	);
};

export default Meme;
