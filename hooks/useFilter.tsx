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
		debounce((query: string) => {
			let filtered = countryList;

			// Apply search filter
			if (query.length > 0) {
				filtered = filtered.filter((country: Country) => {
					const commonName = country.name.common.toLowerCase();
					const searchTerm = query.toLowerCase();
					return commonName.includes(searchTerm);
				});
			}

			setFilteredCountries(filtered);
		}, 300), // Debounce search by 300ms
		[countryList],
	);

	// Debounced sort function
	const debouncedSort = useCallback(
		debounce((sort: string, currentFilteredCountries: Country[]) => {
			const sorted = [...currentFilteredCountries];

			// Apply sorting
			switch (sort) {
				case "region":
					sorted.sort((a, b) => a.region.localeCompare(b.region));
					break;
				case "population":
					sorted.sort((a, b) => b.population - a.population);
					break;
				case "area":
					sorted.sort((a, b) => b.area - a.area);
					break;
				case "borderCountries":
					sorted.sort(
						(a, b) => (b.borders?.length || 0) - (a.borders?.length || 0),
					);
					break;
				case "capital":
					sorted.sort((a, b) =>
						(a.capital?.[0] || "").localeCompare(b.capital?.[0] || ""),
					);
					break;
				default:
					// No sorting
					break;
			}

			setFilteredCountries(sorted);
		}, 200), // Debounce sort by 200ms
		[],
	);

	// Reset to original list if no search term and no sort type
	useEffect(() => {
		if (searchTerm.length === 0 && sortType.length === 0) {
			setFilteredCountries(countryList);
		}
	}, [searchTerm, sortType, countryList]);

	// Trigger debounced search whenever searchTerm changes
	useEffect(() => {
		debouncedSearch(searchTerm);
	}, [searchTerm, debouncedSearch]);

	// Trigger debounced sort whenever sortType or filteredCountries changes
	useEffect(() => {
		debouncedSort(sortType, filteredCountries);
	}, [sortType, filteredCountries, debouncedSort]);

	return {
		filteredCountries,
	};
}
