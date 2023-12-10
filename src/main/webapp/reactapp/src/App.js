import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8081/api/apartment")
			.then((response) => {
				return response.json();
			})
			.then(function (data) {
				console.log(data)
				setMessages(data);
			});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<table>
					<thead>
					<tr>
						<th>#</th>
						<th>거래금액</th>
					</tr>
					</thead>
					<tbody>
						{messages.map((message) => <tr><td>1</td><td>{message.transactionAmount}</td></tr>)}
					</tbody>
				</table>
			</header>
		</div>
	);
}

export default App;
