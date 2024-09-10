import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        background-color: #000;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
    }

    html {
        scroll-behavior: smooth;

        @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
        }
    }

    body {
        display: flex;
        margin: 0;
        min-height: 100vh;
        min-width: 320px;
        place-items: center;
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