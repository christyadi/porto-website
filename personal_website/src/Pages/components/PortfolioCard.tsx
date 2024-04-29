import React from "react";
import { GitHub } from "@mui/icons-material";

interface PortfolioCardProps {
	title: string;
	description: string;
	link: string;
	image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
	title,
	description,
	link,
	image,
}) => {
	const handleClick = (link: string) => {
		// Handle navigation to the project link
		window.open(link, "_blank");
	};

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative">
			{/* Picture on top of the card */}
			<img src={image} alt="Project" className="w-full rounded-t-lg" />
			<div className="p-6">
				<h3 className="text-lg font-semibold mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
				<div
					className="text-blue-500 hover:underline mr-2"
					onClick={() => handleClick(link)}
				>
					View Project
					<GitHub className="text-gray-600 ml-3" />
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
