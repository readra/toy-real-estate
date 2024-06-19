import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';
import AppLayout from './AppLayout';

const DarkMode = () => {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === 'light' ? '🌝' : '🌚';

    return (
        <AppLayout>
            <h2> Welcome to {''}
                <a
                    href="https://www.naver.com"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Dark mode!
                </a>
                <br/>
                <ColoredText>Current mode is {CurrentMode}</ColoredText>
            </h2>
            <a
                href="https://www.naver.com"
                target="_blank"
                rel="noreferrer noopener"
            >
                All rights reserved by Jin yong Kim
            </a>
        </AppLayout>
    )
}

export default DarkMode;

const ColoredText = styled.span`
  color: #E6B74A;
`