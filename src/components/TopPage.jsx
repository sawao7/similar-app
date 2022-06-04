import React from "react";
import axios from "axios";

export const TopPage = () => {
	const [text, setText] = React.useState();
	const [image, setImage] = React.useState();
	const [image2, setImage2] = React.useState();

	const func = () => {
		setText("test");
	};

	const getImage = (e) => {
		const files = e.target.files;
		if (files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				console.log(e.target.result);
				setImage(e.target.result);
			};
			reader.readAsDataURL(file);
		} else {
			this.setState({ imageData: null });
		}
	};

	return (
		<div>
			<h1>画像を入力してください</h1>

			<div className="flex justify-around">
				<div>
					<input accept="image/*" type="file" onChange={getImage} />
					<img className="h-48" src={image} alt="none" />
				</div>
			</div>
			<div className="flex justify-around">
				<img className="" src="" alt="none"/>
				<img className="" src="" alt="none"/>
			</div>
			<div>
				<p className="">{text}</p>
			</div>
		</div>
	);
};
