import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import TraineeApiFetchingTest from "@/pages/TraineeApiFetchingTest";
import CustomHooks from "@/pages/CustomHooks";

export default function App(){

	/* One of the things I like MUI its how easy is to configure colors and dark/light mode, here is a minimal example */
	const theme = createTheme({
		palette: {
			primary: {
				main: '#005f40',
			},
			secondary: {
				main: '#eee', 
			},
			background: {
				default: '#fafafa',
				paper: '#fff',
			},
			text: {
				primary: 'rgba(0, 0, 0, 0.87)', 
				secondary: 'rgba(0, 0, 0, 0.54)',
			},
		},
		typography: {
			fontFamily: 'Roboto, Arial, sans-serif',
		},
	}/*, esES */);	// Lang here  

	/* This a nice and fast way to use BrowserRouter, but if you have a bigger project you should consider a more dynamic way */
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/react_examples"> {/* Dont forget basename! */}
				<Routes>
					<Route path="/">
						<Route index element={<Home />}/>
						<Route path="home" element={<Home />}/>
						<Route path="trainee" element={<TraineeApiFetchingTest />} />
						<Route path="customHooks" element={<CustomHooks />} />
						<Route path="*" element={<NotFound />}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);

}
