import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
	const [theme, setTheme] = useState("light");

	const handleThemeChange = (
		event: React.MouseEvent<HTMLElement>,
		newTheme: string
	) => {
		setTheme(newTheme);
		// You can add your own logic here to change the theme
	};

	const themeIcon = theme === "light" ? <DarkModeIcon /> : <LightModeIcon />;

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: { xs: 4, sm: 8 },
				py: { xs: 2, sm: 3 },
				textAlign: { sm: "center", md: "left" },
			}}
		>
			<Typography variant="h6" style={{ marginRight: "100px" }}>
				<Button href="" className="text-base">
					Christyadi
				</Button>
			</Typography>
			<div className="">
				<Button color="primary">Home</Button>
				<Button color="primary">About</Button>
				<Button color="primary">Technologies</Button>
				<Button color="primary">Projects</Button>
				<Button color="primary">Contact</Button>
				<ToggleButtonGroup
					color="primary"
					exclusive
					value={theme}
					onChange={handleThemeChange}
				>
					<ToggleButton value="light" style={{ border: "none" }}>
						{themeIcon}
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</Container>
	);
};

export default Header;
