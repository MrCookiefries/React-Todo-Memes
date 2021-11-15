import { useSelector } from "react-redux";
import Meme from "./Meme";
import MemeForm from "./MemeForm";
import "./MemeList.css";

const MemeList = () => {
	const memes = useSelector((store) => store.memes);

	return (
		<div className="MemeList">
			<h2>Memes</h2>
			<p>Click on a meme to delete it.</p>
			<MemeForm />
			<section>
				{memes.map((m) => (
					<Meme key={m.id} {...m} />
				))}
			</section>
		</div>
	);
};

export default MemeList;

// https://pbs.twimg.com/profile_images/1404180815102103557/6R0UIlMb_400x400.jpg
