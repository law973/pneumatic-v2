import styled from "styled-components";

const BaseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

export const ArrowButton = styled(BaseButton)`
    svg {
        color: white;
        height: auto;
		width: 102px;
    }
`;

export const ToolsButton = styled(BaseButton)`
    background-color: #0000ff;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-family: inherit;
    font-size: 1.5rem;
    /* margin-top: -30px; */
    outline: 1px solid #000;
    padding: 5px 152px 5px 10px;
    text-align: left;
    width: min-content;

    &:hover {
        background-color: #1f1fff;
        transform: scale(0.975);
    }

    &:active {
        background-color: #9999ff;
        border: 2px solid #000;
        color: black;
        outline: 1px solid #000;
        transform: scale(0.95);
    }

    &:not(:hover), &:not(:active) {
        transition: 
            background-color 0.75s ease, 
            border 0.75s ease,
            color 0.75s ease,
            outline 0.75s ease;
    }
`;