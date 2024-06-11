import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Apartment from './Apartment';
import NotFound from './NotFound';
import ThemeProvider from "./context/themeProvider";
import {GlobalStyle} from "./theme/GlobalStyle";
import ThemeMode from "./components/ThemeMode";
import Sub from "./components/Sub";

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<ThemeProvider>
					<GlobalStyle />
					<Suspense fallback={<div>...loading</div>}>
						<Routes>
							<Route path="/" component={ThemeMode}/>
							<Route path="/sub" component={Sub}/>
							<Route path="/main" element={<Main />}/>
							<Route path="/apartment/*" element={<Apartment />}/>
							{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
							<Route path="*" element={<NotFound />}/>
						</Routes>
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
