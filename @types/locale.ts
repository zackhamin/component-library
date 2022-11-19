import { CountryCode } from './countryCode';

type Language = 'en' | 'nl' | 'fr' | 'de';
type Separator = '-' | '_';

export type Locale = `${Language}${Separator}${CountryCode}`;
