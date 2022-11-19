import { Delivery } from '@Types/delivery';
import { StyledList } from './DeliveryOptions.styles';

import { Heading } from 'Atoms/Heading';
import { ListOption } from 'Atoms/ListOption';
import { Price } from 'Atoms/Price';
import { Text } from 'Atoms/Text';
import { dateToDayWithTime, dateToWeekdayWithMonth } from 'Utils/date';

export interface DeliveryOptionsProps {
	deliveryOptions: Delivery[];
	selectedDeliveryOption?: Delivery;
	handleSelect: (option: Delivery) => void;
	i18n?: {
		locale: string;
	};
}

export const DeliveryOptions = ({
	deliveryOptions,
	selectedDeliveryOption,
	handleSelect,
	i18n,
}: DeliveryOptionsProps) => {
	return (
		<StyledList>
			{deliveryOptions.map((option) => {
				const isSelected = option.optionId === selectedDeliveryOption?.optionId;

				return (
					<ListOption
						key={option.optionId}
						isSelected={isSelected}
						handleSelect={() => handleSelect(option)}
					>
						<Heading size="1.8rem">{option.name}</Heading>
						<Text>
							Order before{' '}
							{dateToDayWithTime(new Date(option.cutoff), i18n?.locale, true)}
						</Text>
						<Text>
							Delivery on or before{' '}
							{dateToWeekdayWithMonth(new Date(option.timeWindow.to))}
						</Text>
						<Text>
							<Price {...option.price} />
							{option.freeOption && (
								<span className="free-option">
									Free from <Price {...option.freeOption} />
								</span>
							)}
						</Text>
					</ListOption>
				);
			})}
		</StyledList>
	);
};
