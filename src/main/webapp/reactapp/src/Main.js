import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TableBody, TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@mui/material";

const Main = () => {
	const [algorithm, setAlgorithm] = React.useState("");

	const handleChange = (event) => {
		setAlgorithm(event.target.value);
	};

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
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/apartment/1"><li>1번상품</li></Link>
				<Link to="/apartment/2"><li>2번상품</li></Link>
			</ul>

			<div style={{ textAlign: "center" }}>
				<FormControl sx={{ m: 1, minWidth: 200 }}>
					<InputLabel id="demo-simple-select-label">
						Algorithm
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={algorithm}
						label="Algorithm"
						onChange={handleChange}
					>
						<MenuItem value={1}>Stack</MenuItem>
						<MenuItem value={2}>Queue</MenuItem>
						<MenuItem value={3}>Array</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div style={{ textAlign: "center" }}>
				<TableContainer component={Paper}>
					<TableHead>
						<TableRow>
							<TableCell>NO</TableCell>
							<TableCell>아파트</TableCell>
							<TableCell>주소</TableCell>
							<TableCell>층</TableCell>
							<TableCell>전용면적(㎡)</TableCell>
							<TableCell>건축년도</TableCell>
							<TableCell>거래금액(만원)</TableCell>
							<TableCell>거래일</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{messages.map((message, index) => (
							<TableRow key={index}>
								<TableCell>{index}</TableCell>
								<TableCell>{message.apartmentName}</TableCell>
								<TableCell>{message.lawd} {message.legalBuilding} {message.localNumber}</TableCell>
								<TableCell>{message.layer}</TableCell>
								<TableCell>{message.exclusiveArea}</TableCell>
								<TableCell>{message.buildingYear}</TableCell>
								<TableCell>{message.transactionAmount}</TableCell>
								<TableCell>{message.year}년 {message.month}월 {message.day}일</TableCell>
							</TableRow>
						))}
					</TableBody>
				</TableContainer>
			</div>
		</>
	);
};

export default Main;
