interface Country {
	name: {
		official: string;
		common: string;
		nativeName: {
			[key: string]: {
				official: string;
			};
		};
	};
	cca3: string;
	capital: string[];
	region: string;
	subregion: string;
	languages: {
		[key: string]: string;
	};
	borders: string[];
	area: number;
	population: number;
	timezones: string[];
	continents: string;
	flags: {
		svg: string;
		alt: string;
	};
}

interface CountryListState {
	countryList: Country[];
	loading: boolean;
	error: string | null;
}

interface CountryState {
	country: Country;
	loading: boolean;
	error: string | null;
}
