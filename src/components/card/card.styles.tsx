import styled from "styled-components";

export const Card = styled.div`
    border: 3px solid;
    border-radius: 25px;
    box-shadow:	
        1.6px 1.6px 1.9px rgba(0, 0, 0, 0.018),
		3.8px 3.8px 4.3px rgba(0, 0, 0, 0.026),
		6.8px 6.8px 7.7px rgba(0, 0, 0, 0.032),
		11.2px 11.2px 12.8px rgba(0, 0, 0, 0.038),
		18.5px 18.5px 21.2px rgba(0, 0, 0, 0.044),
		32.4px 32.4px 37px rgba(0, 0, 0, 0.052),
		70px 70px 80px rgba(0, 0, 0, 0.07);
	display: inline-block;
    padding: 0 25px;
	text-align: left;
	width: fit-content;

    p {
	    max-width: 75ch;
	    text-align: left;

		@media screen and (min-width: 576px) {
			
		}
    }
`;

export const IntroductionCard = styled(Card)`
	background-color: #00008f;
	color: #fff;

	::selection {
		background-color: #add8e6;
		color: #000;
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