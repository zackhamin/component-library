import { Address as AddressType } from '@Types/address';

type ShowMobileNumber = {
	multipleLines: true;
	showMobileNumber?: boolean;
};

type MultipleLines = {
	multipleLines?: false;
	showMobileNumber?: false;
};

type Options = (MultipleLines | ShowMobileNumber) & {
	showName?: boolean;
};

export interface AddressProps {
	address: AddressType;
	options?: Options;
}

export const Address = ({
	address,
	options: { showName, multipleLines, showMobileNumber } = {
		showName: false,
		multipleLines: false,
		showMobileNumber: false,
	},
}: AddressProps) => {
	const {
		addressDetails: { line1, line2, city, county, country, postCode },
		addressContactDetails: { firstName, lastName, mobileNumber },
	} = address;

	if (multipleLines) {
		return (
			<p>
				{showName && (
					<>
						{firstName} {lastName}
						<br />
					</>
				)}
				{line1}
				<br />
				{line2 && (
					<>
						{line2}
						<br />
					</>
				)}
				{city}
				<br />
				{county && (
					<>
						{county}
						<br />
					</>
				)}
				{postCode}
				{country && (
					<>
						<br />
						{country}
					</>
				)}
				{showMobileNumber && (
					<>
						<br />
						<br />
						{mobileNumber}
					</>
				)}
			</p>
		);
	}

	return (
		<p>
			{showName && (
				<>
					{firstName} {lastName},{' '}
				</>
			)}
			{line1}, {line2 && <>{line2}, </>}
			{city}, {county && <>{county}, </>}
			{postCode}
			{country && (
				<>
					, {country}
					<br />
				</>
			)}
		</p>
	);
};
