import styled from "styled-components";

export const RangeSliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label span {
        font-weight: normal;
    }
`;

export const StyledRangeSlider = styled.input`
    appearance: none;
    background: #fff;
    border-radius: 12px;
    cursor: pointer;
    height: 24px;
    /* transition: background 0.75s ease; */
    width: 100%;

    &::-webkit-slider-thumb {
        appearance: none;
        background: #0000ff;
        border: 2px solid #fff;
        border-radius: 10px;
        cursor: pointer;
        height: 48px;
        outline: 1px solid #000;
        /* transition: background 0.75s ease; */
        width: 20px;
    }

    &::-moz-range-thumb {
        background: #0000ff;
        border: 2px solid #fff;
        border-radius: 10px;
        cursor: pointer;
        height: 48px;
        outline: 1px solid #000;
        /* transition: background 0.75s ease; */
        width: 20px;
    }
`;

export const MarkingNumbersContainer = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-size: 1rem;
        text-align: center;
        width: 40px;
    }  
`;