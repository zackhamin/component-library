import styled from 'styled-components';

const StyledOrientationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: space-between;
	height: auto;
	width: 100%;
	padding: 0rem 1.6rem 2.4rem 1.6rem;
	box-sizing: border-box;
	&.vertical {
		flex-direction: column;
	}
`;

export { StyledOrientationWrapper };
