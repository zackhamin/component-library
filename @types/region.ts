import { CountryCode } from './countryCode';
import { Locale } from './locale';
export interface Region {
	name: string;
	countryCode: CountryCode;
	locale: Locale;
	siteId: `${number}`;
}
