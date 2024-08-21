import { RecoveryContainer, RecoveryCard, NextSectionTools } from "./recovery.styles";

const Recovery = () => {
    return (
        <RecoveryContainer>
            <RecoveryCard>
                <h1>Recovery</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, nesciunt nam? Eum quod cumque et! Consectetur, rem! Id fuga aut porro. Nesciunt nisi distinctio quaerat voluptatum similique, pariatur nihil fuga.</p>
            </RecoveryCard>
            <NextSectionTools to='/tools'>Next Section: Tools</NextSectionTools>
        </RecoveryContainer>
    );
};

export default Recovery;