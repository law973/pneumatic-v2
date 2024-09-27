import styled from "styled-components";

export const Card = styled.div`
    border-bottom: 2px solid;
	border-top: 2px solid;
	box-shadow:	
		1.6px 1.6px 1.9px rgba(0, 0, 0, 0.018),
		3.8px 3.8px 4.3px rgba(0, 0, 0, 0.026),
		6.8px 6.8px 7.7px rgba(0, 0, 0, 0.032),
		11.2px 11.2px 12.8px rgba(0, 0, 0, 0.038),
		18.5px 18.5px 21.2px rgba(0, 0, 0, 0.044),
		32.4px 32.4px 37px rgba(0, 0, 0, 0.052),
		70px 70px 80px rgba(0, 0, 0, 0.07);
    padding: clamp(15px, 2.5vw, 25px);
	text-align: left;
	width: 100%;

	// Breakpoint (Small, Smartphone)
	@media (min-width: 576px) {
		border: 2px solid;
		border-radius: clamp(10px, 1.7vw, 25px);
		width: clamp(36rem, 90vw, 70rem);
	}

	/* Breakpoint (Medium, Tablet) */
	@media screen and (min-width: 768px) {
		border-width: 3px;
	}

	/* Breakpoint (Large, Desktop) */
	@media screen and (min-width: 992px) {
		border-width: 4px;
	}
`;

export const IntroductionCard = styled(Card)`
	background-color: var(--content-color-home);
	border-color: var(--outline-color-home);
	color: var(--text-color-white);

	::selection {
		background-color: var(--selection-color-home);
		color: var(--text-selected-color-black);
	}

	svg {
		fill: var(--outline-color-home);
	}
`;

export const DietCard = styled(Card)`
	background-color: var(--content-color-diet);
	border-color: var(--outline-color-diet);
	color: var(--text-color-black);

	::selection {
		background-color: var(--selection-color-diet);
		color: var(--text-selected-color-white);
	}

	svg {
		fill: var(--outline-color-diet);
	}
`;

export const ExerciseCard = styled(Card)`
	background-color: var(--content-color-exercise);
	border-color: var(--outline-color-exercise);
	color: var(--text-color-white);

	::selection {
		background-color: var(--selection-color-exercise);
		color: var(--text-selected-color-black);
	}

	svg {
		fill: var(--outline-color-exercise);
	}
`;

export const RecoveryCard = styled(Card)`
	background-color: var(--content-color-recovery);
	border-color: var(--outline-color-recovery);
	color: var(--text-color-black);

	::selection {
		background-color: var(--selection-color-recovery);
		color: var(--text-selected-color-white);
	}

	svg {
		fill: var(--outline-color-recovery);
	}
`;

export const ToolsCard = styled(Card)`
	background-color: var(--content-color-tools);
	border-color: var(--outline-color-tools);
	color: var(--text-color-black);

	::selection {
		background-color: var(--selection-color-tools);
		color: var(--text-selected-color-white);
	}

	svg {
		fill: var(--outline-color-tools);
	}
`;

export const ShopCard = styled(Card)`
	background-color: var(--content-color-shop);
	border-color: var(--outline-color-shop);
	color: var(--text-color-black);

	::selection {
		background-color: var(--selection-color-shop);
		color: var(--text-selected-color-white);
	}

	svg {
		fill: var(--outline-color-shop);
	}
`;

export const SignInCard = styled(Card)`
	background-color: var(--content-color-sign-in);
	border-color: var(--outline-color-sign-in);
	color: var(--text-color-black);

	::selection {
		background-color: var(--selection-color-sign-in);
		color: var(--text-selected-color-white);
	}

	svg {
		fill: var(--outline-color-sign-in);
	}
`;