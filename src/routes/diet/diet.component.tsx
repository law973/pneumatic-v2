import { DietContainer, DietCard, NextSectionExercise } from "./diet.styles";

const Diet = () => {
    return (
        <DietContainer>
            <DietCard>
                <h1>Diet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam qui provident quas ea, aperiam illo aspernatur, saepe quidem explicabo quae obcaecati excepturi dolorum quia praesentium minus! Ullam, modi nam.</p>
            </DietCard>
            <NextSectionExercise to='/exercise'>Next Section: Exercise</NextSectionExercise>
        </DietContainer>
    );
};

export default Diet;