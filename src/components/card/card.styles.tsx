import styled from "styled-components";

export const Card = styled.div`
    border: 2px solid;
    border-radius: 25px;
    box-shadow:	
        1.6px 1.6px 1.9px rgba(0, 0, 0, 0.018),
		3.8px 3.8px 4.3px rgba(0, 0, 0, 0.026),
		6.8px 6.8px 7.7px rgba(0, 0, 0, 0.032),
		11.2px 11.2px 12.8px rgba(0, 0, 0, 0.038),
		18.5px 18.5px 21.2px rgba(0, 0, 0, 0.044),
		32.4px 32.4px 37px rgba(0, 0, 0, 0.052),
		70px 70px 80px rgba(0, 0, 0, 0.07);
	max-width: 70vw;
    padding: 0 15px;
	text-align: left;
	width: fit-content;

	/* Portrait Breakpoints -------------------- */

	/* Breakpoint (Small) */
	@media screen and (min-width: 576px) and (orientation: portrait) {
		border-width: 3px;
		padding: 0 20px;
	}

	/* ALSO AFFECTS LANDSCAPE ORIENTATION */
	/* Breakpoint (Medium) */
	@media screen and (min-width: 768px) {
		padding: 0 25px;
	}

	/* Breakpoint (Large) */
	@media screen and (min-width: 992px) and (orientation: portrait) {
		max-width: 75vw;
	}

	/* Landscape Breakpoints -------------------- */

	/* Landscape Breakpoint (Small) */
	@media screen and (min-width: 576px) and (orientation: landscape) {
		max-width: 80vw;
	}

	/* Landscape Breakpoint (Large) */
	@media screen and (min-width: 992px) and (orientation: landscape) {
		border-width: 3px;
		max-width: 85vw;
	}

	/* Landscape Breakpoint (Extra Extra Large) */
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		border-width: 4px;
	}
`;

export const IntroductionCard = styled(Card)`
	background-color: #00008f;
	color: #fff;

	::selection {
		background-color: #add8e6;
		color: #000;
	}

	svg {
		fill: #fff;
	}
`;

export const DietCard = styled(Card)`
	background-color: #9cfce3;
	color: #000;

	::selection {
		background-color: #006400;
		color: #fff;
	}

	svg {
		fill: #000;
	}
`;

export const ExerciseCard = styled(Card)`
	background-color: #5d0914;
	color: #fff;

	::selection {
		background-color: #f08080;
		color: #000;
	}

	svg {
		fill: #fff;
	}
`;

export const RecoveryCard = styled(Card)`
	background-color: #ededfd;
	color: #000;

	::selection {
		background-color: #800080;
		color: #fff;
	}

	svg {
		fill: #000;
	}
`;

export const ToolsCard = styled(Card)`
	background-color: #fee485;
	color: #000;

	::selection {
		background-color: #b8860b;
		color: #fff;
	}

	svg {
		fill: #000;
	}
`;

export const ShopCard = styled(Card)`
	background-color: #fff;
	color: #000;

	::selection {
		background-color: #000;
		color: #fff;
	}

	svg {
		fill: #000;
	}
`;