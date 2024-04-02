import { configureStore } from "@reduxjs/toolkit";
import successSnackbarSlice from "../features/components/snackbars/successSnackbarSlice.ts";
import errorSnackbarSlice from "../features/components/snackbars/errorSnackbarSlice.ts";

const store = configureStore({
	reducer: {
		successSnackbar: successSnackbarSlice,
		errorSnackbar: errorSnackbarSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
