import React from "react";
import axios from "axios";
import dog from "../img/dog.webp";
import cat from "../img/cat.jpeg";

export const TopPage = () => {
	const [text, setText] = React.useState();
	const [image, setImage] = React.useState();

	const url = "";

	React.useEffect(() => {
		axios
			.post(url, {
				image: image,
			})
			.then((res) => {
				console.log(res.data);
				setText("完了");
			});
	}, [image]);

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
		<div className="p-10">
			<div className="flex justify-center">
				<h1 className="font-bold">画像を入力してください</h1>
			</div>

			<div className="flex justify-around">
				<div>
					<label class="flex justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
						ファイル選択
						<input className="hidden" accept="image/*" type="file" onChange={getImage} />
					</label>
					<img className="h-48" src={image} alt="" />
				</div>
			</div>
			<div className="flex justify-around">
				<img className="w-72" src={dog} alt="none" />
				<img className="w-72" src={cat} alt="none" />
			</div>
			<div>
				<p className="">{text}</p>
			</div>
		</div>
	);
};
