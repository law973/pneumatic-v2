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
    padding: 0 25px;

    p {
	    max-width: 75ch;
	    text-align: left;
    }
`;