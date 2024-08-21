import { ExerciseContainer, ExerciseCard, NextSectionRecovery } from "./exercise.styles";

const Exercise = () => {
    return (
        <ExerciseContainer>
            <ExerciseCard>
                <h1>Exercise</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad perspiciatis quos eius sit ducimus. Unde delectus placeat consequuntur animi reprehenderit vero qui accusantium optio sint culpa. Consectetur, illo illum.</p>
            </ExerciseCard>
            <NextSectionRecovery to='/recovery'>Next Section: Recovery</NextSectionRecovery>
        </ExerciseContainer>
    );
};

export default Exercise;