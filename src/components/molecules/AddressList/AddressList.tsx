import { Address as AddressType } from '@Types/address';

import { Address } from 'Atoms/Address';
import { ListOption } from 'Atoms/ListOption';
import { Text } from 'Atoms/Text';

import { StyledList } from './AddressList.styles';

export interface AddressListProps {
	addresses: AddressType[];
	selectedAddress?: AddressType;
	handleSelect: (option: AddressType) => void;
	i18n: {
		strings: {
			noAddresses: string;
		};
	};
}

export const AddressList = ({
	handleSelect,
	addresses,
	selectedAddress,
	i18n = { strings: { noAddresses: '' } },
}: AddressListProps) => {
	return (
		<StyledList>
			{addresses.length ? (
				addresses.map((address) => {
					const isSelected =
						selectedAddress?.addressMetadata.addressId ===
						address.addressMetadata.addressId;

					return (
						<ListOption
							key={address.addressMetadata.addressId}
							isSelected={isSelected}
							handleSelect={() => handleSelect(address)}
						>
							<Address address={address} options={{ showName: true }} />
						</ListOption>
					);
				})
			) : (
				<Text>{i18n.strings.noAddresses}</Text>
			)}
		</StyledList>
	);
};
