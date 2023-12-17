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
						<th>아파트</th>
						<th>층</th>
						<th>거래금액</th>
						<th>거래일</th>
					</tr>
					</thead>
					<tbody>
						{messages.map((message, index) =>
							<tr>
								<td>{index}</td>
								<td>{message.apartmentName}</td>
								<td>{message.layer}</td>
								<td>{message.transactionAmount}</td>
								<td>{message.year}년 {message.month}월 {message.day}일</td>
							</tr>
						)}
					</tbody>
				</table>
			</header>
		</div>
	);
}

export default App;
