import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from "react-native";
import SearchInput from "@/components/SearchInput";
import DisplayLoading from "@/components/DisplayLoading";
import DisplayError from "@/components/DisplayError";
import DisplayEmptyList from "@/components/DisplayEmptyList";
import CountryCard from "@/components/CountryCard";
import { useCountries } from "@/hooks/useCountryList";
import { useSearch } from "@/hooks/useSearch";

export default function App() {
	const { loading, error } = useCountries();
	const [search, setSearch] = useState("");
	const { filteredCountries } = useSearch(search);

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
						data={filteredCountries}
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
