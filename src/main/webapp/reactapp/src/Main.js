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
import axios from 'axios';

const Main = () => {
	const [si, setSi] = React.useState("");
	const [gu, setGu] = React.useState("");
	const [dong, setDong] = React.useState("");

	const handleSiChange = (event) => {
		setSi(event.target.value);

	};
	const handleGuChange = (event) => {
		setGu(event.target.value);
	};
	const handleDongChange = (event) => {
		setDong(event.target.value);
	};


	const [messages, setMessages] = useState([]);
	const [sis, setSis] = useState([]);
	const [gus, setGus] = useState([]);
	const [dongs, setDongs] = useState([]);

	useEffect(() => {
		axios
			.all([axios.get("http://localhost:8081/api/lawd-si"), axios.get("http://localhost:8081/api/lawd-gu"), axios.get("http://localhost:8081/api/lawd-dong")])
			.then(
				axios.spread((si, gu, dong) => {
					setSis(si.data);
					setGus(gu.data);
					setDongs(dong.data);
		}))
		// fetch("http://localhost:8081/api/apartment?lawdCode=11740&startYearMonth=2015-01&endYearMonth=2015-02")
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then(function (data) {
		// 		setMessages(data);
		// 	});
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
					<InputLabel id="si-select-label">
						지역(시)
					</InputLabel>
					<Select
						labelId="si-select-label"
						id="si-select"
						value={si}
						label="Si"
						onChange={handleSiChange}
					>
						{sis.map((si) => (
							<MenuItem value={1}>{si.name} ({si.code})</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 200 }}>
					<InputLabel id="gu-select-label">
						지역(구)
					</InputLabel>
					<Select
						labelId="gu-select-label"
						id="gu-select"
						value={gu}
						label="Gu"
						onChange={handleGuChange}
					>
						{gus.map((gu) => (
							<MenuItem value={1}>{gu.name} ({gu.code})</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 200 }}>
					<InputLabel id="dong-select-label">
						지역(동)
					</InputLabel>
					<Select
						labelId="dong-select-label"
						id="dong-select"
						value={dong}
						label="Dong"
						onChange={handleDongChange}
					>
						{dongs.map((dong) => (
							<MenuItem value={1}>{dong.name} ({dong.code})</MenuItem>
						))}
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
