import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';
import AppLayout from './AppLayout';
import axios from "axios";
import moment from "moment/moment";

const DarkMode = () => {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === 'light' ? '🌝' : '🌚';

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

    const handleSearchClick = () => {
        if ( dong ) {
            axios
                .all([
                    axios.get("http://localhost:8081/api/apartment?lawdCode=" + dong + "&startYearMonth=2015-01&endYearMonth=2015-01&startTransactionAmount=50000&endTransactionAmount=55000&itemCount=50")
                ])
                .then(
                    axios.spread((message) => {
                        setMessages(message.data.results)
                    }))
        } else {
            axios
                .all([
                    axios.get("http://localhost:8081/api/apartment?lawdCode=" + gu + "&startYearMonth=2015-01&endYearMonth=2015-01&startTransactionAmount=50000&endTransactionAmount=55000&itemCount=50")
                ])
                .then(
                    axios.spread((message) => {
                        setMessages(message.data.results)
                    }))
        }
    }

    const [sis, setSis] = useState([]);
    const [gus, setGus] = useState([]);
    const [dongs, setDongs] = useState([]);

    useEffect(() => {
        axios
            .all([axios.get("http://localhost:8081/api/lawd-si"),
                axios.get("http://localhost:8081/api/lawd-gu"),
                axios.get("http://localhost:8081/api/lawd-dong")
            ])
            .then(
                axios.spread((si, gu, dong) => {
                    setSis(si.data);
                    setGus(gu.data);
                    setDongs(dong.data);
                }))
    }, []);

    const [startDate, setStartDate] = useState("거래 일자(시작)");
    const [endDate, setEndDate] = useState("거래 일자(종료)");
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleStartDateChange = (selectedDate) => {
        setIsOpen(false);
        setStartDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    };

    const handleEndDateChange = (selectedDate) => {
        setIsOpen(false);
        setEndDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    };

    return (
        <AppLayout>
            <h2> Welcome to {''}
                <a href="https://github.com/readra" target="_blank" rel="noreferrer noopener">Dark mode!</a>
                <br/>
                <ColoredText>Current mode is {CurrentMode}</ColoredText>
            </h2>
            <a href="https://github.com/readra" target="_blank" rel="noreferrer noopener">All rights reserved by Jin yong Kim</a>
        </AppLayout>
    )
}

export default DarkMode;

const ColoredText = styled.span`
  color: #E6B74A;
`