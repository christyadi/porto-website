import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { messageSchema } from "../utils/validation/messageSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Footer() {
	const navigate = useNavigate();
	const [messageOpen, setMessageOpen] = useState(false);
	const [emailOpen, setEmailOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			message: "",
		},
		resolver: yupResolver(messageSchema),
	});

	const onSubmit = (data: any) => {
		// Handle form submission directly
		// In this example, just logging the form data
		console.log(data);
		navigate("/success");
	};

	const handleEmailClose = () => {
		setEmailOpen(!emailOpen);
		console.log("emailOpen", emailOpen);
	};

	const handleMessageClose = () => {
		setMessageOpen(!messageOpen);
		console.log("messageOpen", messageOpen);
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 4, sm: 8 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: "center", md: "left" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						minWidth: { xs: "100%", sm: "60%" },
					}}
				>
					<Box sx={{ width: { xs: "100%", sm: "60%" } }}>
						<Typography variant="body2" fontWeight={600} gutterBottom>
							Contact Me
						</Typography>
						<Typography
							variant="body2"
							color="text.primary"
							mb={2}
							fontSize={16}
						>
							Hit me up by sending a message.
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<TextField
								sx={{ mt: 2 }}
								id="email"
								hiddenLabel
								{...register("email")}
								size="small"
								variant="outlined"
								fullWidth
								aria-label="Enter your email address"
								placeholder="Your email address"
								inputProps={{
									"aria-label": "Enter your email address",
								}}
							/>
							{errors.email && (
								<Alert onClose={handleEmailClose} severity="error">
									{errors.email.message}
								</Alert>
							)}
							<TextField
								sx={{ mt: 2 }}
								hiddenLabel
								id="message"
								{...register("message")}
								size="medium"
								variant="outlined"
								fullWidth
								multiline
								rows={4}
								aria-label="Enter your message"
								placeholder="Your message"
								inputProps={{
									"aria-label": "Enter your message",
								}}
							/>
							{errors.message && (
								<Alert onClose={handleMessageClose} severity="error">
									{errors.message.message}
								</Alert>
							)}
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{ flexShrink: 0, mt: 2 }}
							>
								Send Message
							</Button>
						</form>
					</Box>
				</Box>

				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						flexDirection: "column",
						gap: 1,
					}}
				>
					<Typography variant="body2" fontWeight={600}>
						Projects
					</Typography>
					<Link color="text.secondary" href="#">
						Features
					</Link>
					<Link color="text.secondary" href="#">
						Highlights
					</Link>
					<Link color="text.secondary" href="#">
						FAQs
					</Link>
				</Box>

				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						flexDirection: "column",
						gap: 1,
					}}
				>
					<Typography variant="body2" fontWeight={600}>
						Company
					</Typography>
					<Link color="text.secondary" href="#">
						About me
					</Link>
					<Link color="text.secondary" href="#">
						Careers
					</Link>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					pt: { xs: 4, sm: 8 },
					width: "100%",
					borderTop: "1px solid",
					borderColor: "divider",
				}}
			>
				<Stack
					direction="row"
					justifyContent="left"
					spacing={1}
					useFlexGap
					sx={{
						color: "text.secondary",
					}}
				>
					<IconButton
						color="inherit"
						href="https://github.com/mui"
						aria-label="GitHub"
						sx={{ alignSelf: "center" }}
					>
						<FacebookIcon />
					</IconButton>
					<IconButton
						color="inherit"
						href="https://twitter.com/MaterialUI"
						aria-label="X"
						sx={{ alignSelf: "center" }}
					>
						<InstagramIcon />
					</IconButton>
					<IconButton
						color="inherit"
						href="https://www.linkedin.com/company/mui/"
						aria-label="LinkedIn"
						sx={{ alignSelf: "center" }}
					>
						<LinkedInIcon />
					</IconButton>
				</Stack>
			</Box>
		</Container>
	);
}
