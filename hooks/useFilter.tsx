import { useState, useEffect, useCallback } from "react";
import { useCountries } from "@/hooks/useCountryList";
import debounce from "lodash.debounce";

export function useFilter(
	searchTerm: string,
	sortType: string,
): {
	filteredCountries: Country[];
} {
	const { countryList } = useCountries();
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

	// Debounced search function
	const debouncedSearch = useCallback(
		debounce((query: string, sort: string) => {
			let filtered = countryList;

			// Apply search filter
			if (query.length > 0) {
				filtered = filtered.filter((country: Country) =>
					country.name.common.toLowerCase().includes(query.toLowerCase()),
				);
			}

			// Apply sorting
			switch (sort) {
				case "region":
					filtered.sort((a, b) => a.region.localeCompare(b.region));
					break;
				case "population":
					filtered.sort((a, b) => b.population - a.population);
					break;
				case "area":
					filtered.sort((a, b) => b.area - a.area);
					break;
				case "borderCountries":
					filtered.sort(
						(a, b) => (b.borders?.length || 0) - (a.borders?.length || 0),
					);
					break;
				case "capital":
					filtered.sort((a, b) =>
						(a.capital?.[0] || "").localeCompare(b.capital?.[0] || ""),
					);
					break;
				default:
					// No sorting
					break;
			}

			setFilteredCountries(filtered);
		}, 200),
		[countryList],
	);

	useEffect(() => {
		debouncedSearch(searchTerm, sortType);
	}, [searchTerm, sortType, debouncedSearch]);

	return {
		filteredCountries,
	};
}
