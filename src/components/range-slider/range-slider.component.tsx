import { RangeSliderContainer, StyledRangeSlider, MarkingNumbersContainer } from "./range-slider.styles";

const RangeSlider = () => {
    return (
        <RangeSliderContainer>
            <label>Rate:</label>
            <StyledRangeSlider/>
            <MarkingNumbersContainer>
                <p>-2.00</p>
                <p>-1.75</p>
                <p>-1.50</p>
                <p>-1.25</p>
                <p>-1.00</p>
                <p>-0.75</p>
                <p>-0.5</p>
                <p>-0.25</p>
                <p>0</p>
                <p>+0.25</p>
                <p>+0.50</p>
                <p>+0.75</p>
                <p>+1.0</p>
                <p>+1.25</p>
                <p>+1.50</p>
                <p>+1.75</p>
                <p>+2.00</p>
            </MarkingNumbersContainer>
        </RangeSliderContainer>
    );
};

export default RangeSlider;