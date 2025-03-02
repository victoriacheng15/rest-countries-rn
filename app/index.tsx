import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import debounce from "lodash.debounce";
import SearchInput from "@/components/SearchInput";
import DisplayLoading from "@/components/DisplayLoading";
import DisplayError from "@/components/DisplayError";
import DisplayEmptyList from "@/components/DisplayEmptyList";
import CountryCard from "@/components/CountryCard";
import { useCountries } from "@/hooks/useCountryList";

export default function App() {
	const { countryList, loading, error } = useCountries();
	const [search, setSearch] = useState("");
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
		debouncedSearch(search);
	}, [search, debouncedSearch]);

	return (
		<View style={styles.container}>
			{/* Search Input */}
			<SearchInput search={search} setSearch={setSearch} />
			{/* List Container */}
			<View style={styles.listContainer}>
				{loading ? (
					<DisplayLoading />
				) : error ? (
					<DisplayError error={error} />
				) : (
					<FlatList
						data={search.length > 0 ? filteredCountries : countryList}
						keyExtractor={(item) => item.cca3}
						renderItem={({ item }) => <CountryCard country={item} />}
						ListEmptyComponent={<DisplayEmptyList />}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	listContainer: {
		flex: 1,
	},
});
