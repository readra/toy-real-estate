import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from "./context/themeProvider";
import {GlobalStyle} from "./theme/GlobalStyle";
import DarkMode from "./components/DarkMode";
import Sub from "./components/Sub";
import Main from "./Main";

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GlobalStyle />
				<Suspense fallback={<div>...loading</div>}>
					<Routes>
						<Route path="/" element={<DarkMode />}/>
						<Route path="/main" element={<Main />}/>
						<Route path="/sub" element={<Sub />}/>
					</Routes>
				</Suspense>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
