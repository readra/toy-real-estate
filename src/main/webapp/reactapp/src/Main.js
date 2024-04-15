import React, {useEffect, useState} from 'react';
import {
	FormControl, Input,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TableBody, TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button
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


	const [sis, setSis] = useState([]);
	const [gus, setGus] = useState([]);
	const [dongs, setDongs] = useState([]);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios
			.all([axios.get("http://localhost:8081/api/lawd-si"),
				axios.get("http://localhost:8081/api/lawd-gu"),
				axios.get("http://localhost:8081/api/lawd-dong"),
				axios.get("http://localhost:8081/api/apartment?lawdCode=11740&startYearMonth=2015-01&endYearMonth=2015-01&startTransactionAmount=50000&endTransactionAmount=55000&itemCount=50")
			])
			.then(
				axios.spread((si, gu, dong, message) => {
					setSis(si.data);
					setGus(gu.data);
					setDongs(dong.data);
					setMessages(message.data.results)
		}))
	}, []);

	return (
		<>
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

				<FormControl>
					<Button variant="contained">
						조회
					</Button>
				</FormControl>
			</div>

			<div style={{ textAlign: "center" }}>
				<FormControl sx={{ m: 1, minWidth: 200 }}>
					<InputLabel id="amount-up-input-label">
						거래금액(만원) 이상
					</InputLabel>
					<Input/>
				</FormControl>

				<FormControl sx={{ m: 1, minWidth: 200 }}>
					<InputLabel id="amount-down-input-label">
						거래금액(만원) 이하
					</InputLabel>
					<Input/>
				</FormControl>
			</div>

			<div style={{ textAlign: "center" }}>
				<TableContainer component={Paper}>
					<TableHead>
						<TableRow>
							<TableCell>No</TableCell>
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
