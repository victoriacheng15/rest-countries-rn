import { useState, useEffect, useCallback } from "react";
import { useCountries } from "@/hooks/useCountryList";
import debounce from "lodash.debounce";

export function useSearch(searchTerm: string) {
	const { countryList } = useCountries();
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

	const debouncedSearch = useCallback(
		debounce((query: string) => {
			const filtered = countryList.filter((country) =>
				country.name.common.toLowerCase().includes(query.toLowerCase()),
			);
			setFilteredCountries(filtered);
		}, 200),
		[countryList],
	);

	useEffect(() => {
		debouncedSearch(searchTerm);
	}, [searchTerm, debouncedSearch]);

	return {
		filteredCountries: searchTerm.length > 0 ? filteredCountries : countryList,
	};
}
