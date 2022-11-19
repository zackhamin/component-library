import styled from 'styled-components';
import { colors, typography } from 'Styles';

interface ListItemProps {
	isFocused?: boolean;
	isSelected?: boolean;
}

const StyledList = styled.ul`
	overflow: auto;
	list-style: none;
	padding: 2px;
	margin: 0;
	outline: none;
`;

const ListItem = styled.li<ListItemProps>`
	background: ${(props) => (props.isFocused ? colors.lime : colors.white)};
	color: ${(props) =>
		props.isFocused
			? colors.white
			: props.isSelected
			? colors.emerald
			: colors.darkGrey};
	margin: 0.25rem;
	font-family: ${typography.type.body};
	font-size: 1.4rem;
	font-weight: ${(props) => (props.isSelected ? '600' : 'normal')};
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: default;
	outline: none;
	border-radius: 4px;

	&[aria-disabled='true'] {
		color: ${colors.lightGrey};
	}
`;

const ItemContent = styled.div`
	display: flex;
	align-items: center;
`;
export { StyledList, ListItem, ItemContent };
