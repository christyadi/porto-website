import * as yup from "yup";

export const messageSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required")
		.max(100, "Email must be at most 100 characters long")
		.min(5, "Email must be at least 5 characters long"),
	message: yup
		.string()
		.required("Message is required")
		.max(500, "Message must be at most 500 characters long")
		.min(20, "Message must be at least 20 characters long"),
});
