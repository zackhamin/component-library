import { ReactElement, ReactNode } from 'react';
import { ReactPaginateProps } from 'react-paginate';

type Pagination = PaginationProps & {
	onPageChange?: (args: { selected: number; isOnTheLastPage: boolean }) => void;
	itemsPerPage: number;
};

export type PaginationControlContext = {
	pagination: Pagination;
	content: ReactElement[];
};

export type PaginationControlProps = PaginationControlContext & {
	children: ReactNode;
};

export type PaginationProps = Omit<ReactPaginateProps, 'pageCount'> & {
	pageCount?: number;
};
