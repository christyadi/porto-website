import { Container, Typography, Button } from "@mui/material";

const Header = () => {
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
			<Typography variant="h6">
				<Button href="" className="text-base">
					Christyadi
				</Button>
			</Typography>
			<div>
				<Button color="primary">Home</Button>
				<Button color="primary">About</Button>
				<Button color="primary">Technologies</Button>
				<Button color="primary">Projects</Button>
				<Button color="primary">Contact</Button>
				{/* <LinkedIn color="primary" />
				<GitHub color="primary" />
				<Instagram color="primary" /> */}
			</div>
		</Container>
	);
};

export default Header;
