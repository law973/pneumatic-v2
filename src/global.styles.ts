import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;

    color: #fff;
    background-color: #000;
    }

    html {
        scroll-behavior: smooth;

        @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
        }
    }

    body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    /* || SCROLLBAR STYLING */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #0000ff;
    }

    ::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 5px;
        min-height: 40px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #ebebeb;
    }
`;