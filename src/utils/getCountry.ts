import { CountryCode } from '@Types/countryCode';

const countries: Record<CountryCode, string> = {
	AT: 'countries.austria',
	AU: 'countries.australia',
	BE: 'countries.belgium',
	BG: 'countries.bulgaria',
	CZ: 'countries.czech_republic',
	DE: 'countries.germany',
	DK: 'countries.denmark',
	EE: 'countries.estonia',
	ES: 'countries.spain',
	FI: 'countries.finland',
	FR: 'countries.france',
	GB: 'countries.united_kingdom',
	GI: 'countries.gibraltar',
	GR: 'countries.greece',
	HR: 'countries.croatia',
	HU: 'countries.hungary',
	IE: 'countries.ireland',
	IS: 'countries.iceland',
	IT: 'countries.italy',
	LI: 'countries.liechtenstein',
	LU: 'countries.luxembourg',
	LV: 'countries.latvia',
	MT: 'countries.malta',
	NL: 'countries.netherlands',
	PL: 'countries.poland',
	PT: 'countries.portugal',
	RO: 'countries.romania',
	SE: 'countries.sweden',
	SG: 'countries.singapore',
	SL: 'countries.slovenia',
	SK: 'countries.slovakia',
	US: 'countries.united_states',
};

export const getCountry = (code: CountryCode) => {
	return countries[code];
};
