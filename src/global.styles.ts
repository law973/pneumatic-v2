import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-display: swap;
        font-family: "Nunito";
        src: url("./assets/fonts/Nunito-VariableFont_wght.ttf");
    }

    :root {
        --bg-color-diet: #06d6a0;
        --bg-color-exercise: #880d1e;
        --bg-color-footer: #000;
        --bg-color-home: #0000ff;
        --bg-color-recovery: #bbbdf6;
        --bg-color-shop: #ff7518;
        --bg-color-sign-in: #f5f5f5;
        --bg-color-tools: #fec601;
        --content-color-diet: #9cfce3;
        --content-color-exercise: #5d0914;
        --content-color-home: #00008f;
        --content-color-recovery: #ededfd;
        --content-color-shop: #ff9d5c;
        --content-color-sign-in: #fff;
        --content-color-tools: #fee485;
        --footer-icon-color: #fff;
        --footer-icon-color-hover: #ebebeb;
        --hamburger-button-color: #fff;
        --hamburger-button-color-hover: #ebebeb;
        --outline-color-diet: #000;
        --outline-color-exercise: #fff;
        --outline-color-home: #fff;
        --outline-color-recovery: #000;
        --outline-color-shop: #000;
        --outline-color-sign-in: #000;
        --outline-color-tools: #000;
        --selection-color-diet: #006400;
        --selection-color-exercise: #f08080;
        --selection-color-footer: #fff;
        --selection-color-home: #add8e6;
        --selection-color-recovery: #800080;
        --selection-color-shop: #8f3900;
        --selection-color-sign-in: #000;
        --selection-color-tools: #b8860b;
        --text-color-black: #000;
        --text-color-white: #fff;
        --text-selected-color-black: #000;
        --text-selected-color-white: #fff;
    }

    [data-theme="dark"] {
        --bg-color-diet: #121212;
        --bg-color-exercise: #121212;
        --bg-color-footer: #1e1e1e;
        --bg-color-home: #121212;
        --bg-color-recovery: #121212;
        --bg-color-shop: #121212;
        --bg-color-sign-in: #121212;
        --bg-color-tools: #121212;
        --content-color-diet: #1e1e1e;
        --content-color-exercise: #1e1e1e;
        --content-color-home: #1e1e1e;
        --content-color-recovery: #1e1e1e;
        --content-color-shop: #1e1e1e;
        --content-color-sign-in: #1e1e1e;
        --content-color-tools: #1e1e1e;
        --footer-icon-color: #d7dadc;
        --footer-icon-color-hover: #bb86fc;
        --hamburger-button-color: #d7dadc;
        --hamburger-button-color-hover: #bb86fc;
        --outline-color-diet: #05c793;
        --outline-color-exercise: #f37c8c;
        --outline-color-home: #9999ff;
        --outline-color-recovery: #a4a6f4;
        --outline-color-shop: #ffa970;
        --outline-color-sign-in: #d7dadc;
        --outline-color-tools: #cb9f01;
        --selection-color-diet: #bb86fc;
        --selection-color-exercise: #bb86fc;
        --selection-color-footer: #bb86fc;
        --selection-color-home: #bb86fc;
        --selection-color-recovery: #bb86fc;
        --selection-color-shop: #bb86fc;
        --selection-color-sign-in: #bb86fc;
        --selection-color-tools: #bb86fc;
        --text-color-black: #d7dadc;
        --text-color-white: #d7dadc;
        --text-selected-color-black: #000;
        --text-selected-color-white: #000;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html {
        scroll-behavior: smooth;

        @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
        }
    }

    body {
        display: flex;
        font-family: 'Nunito', sans-serif;
        line-height: 1.5;
        margin: 0;
        min-height: 100vh;
        min-width: 320px;
        place-items: center;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /* #root, #__next {
        isolation: isolate;
    } */

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

export const ScreenReaderOnly = styled.span`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`;