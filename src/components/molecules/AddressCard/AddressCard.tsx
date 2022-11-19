import { Address as AddressType } from '@Types/address';
import { StyledAddressCard, StyledButtonList } from './AddressCard.styles';

import { Address } from 'Atoms/Address';
import { Button } from 'Atoms/Button';
import { Heading } from 'Atoms/Heading';

export interface AddressCardProps {
	address: AddressType;
	editHandler: () => void;
	deleteHandler: () => void;
	setDefaultHandler: () => void;
	i18n: {
		strings: {
			defaultAddress: string;
			edit: string;
			remove: string;
			setDefault: string;
		};
	};
}

const AddressCard = ({
	address,
	editHandler,
	deleteHandler,
	setDefaultHandler,
	i18n = {
		strings: { defaultAddress: '', edit: '', remove: '', setDefault: '' },
	},
}: AddressCardProps) => {
	const { isDefaultAddress } = address.addressDetails;

	return (
		<StyledAddressCard>
			<div>
				{isDefaultAddress && (
					<Heading level={3} size="1.8rem">
						{i18n.strings.defaultAddress}
					</Heading>
				)}
				<Address
					address={address}
					options={{
						multipleLines: true,
						showName: true,
					}}
				/>
			</div>

			<StyledButtonList>
				<Button size="small" style="text" onClick={editHandler}>
					{i18n.strings.edit}
				</Button>
				<Button
					size="small"
					style="text"
					onClick={deleteHandler}
					disabled={isDefaultAddress}
				>
					{i18n.strings.remove}
				</Button>
				{!isDefaultAddress && (
					<Button size="small" style="text" onClick={setDefaultHandler}>
						{i18n.strings.setDefault}
					</Button>
				)}
			</StyledButtonList>
		</StyledAddressCard>
	);
};

export { AddressCard };
