import { createGlobalStyle } from "styled-components"; // 글로벌 스타일 적용을 도와주는 styled-components 내장 메서드
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset} 
    body {
      // 주로 사용하는 css 초기화 스타일을 적용해주면 된다.
      background: ${({ theme }) => theme.bgColor};
      color: ${( { theme }) => theme.textColor};
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      line-height: 1.5;
      margin: 0 auto;
      font-family: 
        "Montserrat",
        "Helvetica Neue",
        "NanumSquare",
        "Noto Sans",
        "Noto Sans CJK KR",
        "sans-serif";
      word-break: keep-all;
      word-wrap: break-word;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
`;