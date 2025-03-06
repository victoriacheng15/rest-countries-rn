import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import SearchInput from "@/components/SearchInput";
import DisplayLoading from "@/components/DisplayLoading";
import DisplayError from "@/components/DisplayError";
import DisplayEmptyList from "@/components/DisplayEmptyList";
import CountryCard from "@/components/CountryCard";
import SortButton from "@/components/SortButton";
import SortModal from "@/components/SortModal";
import { useCountries } from "@/hooks/useCountryList";
import { useFilter } from "@/hooks/useFilter";

export default function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [sortType, setSortType] = useState("");

	const { filteredCountries } = useFilter(searchTerm, sortType);
	const { loading, error } = useCountries();

	function handleSelectSort(sortType: string) {
		setSortType(sortType);
		setIsModalVisible(false);
	}

	return (
		<View style={styles.container}>
			{/* Search Input */}
			<SearchInput search={searchTerm} setSearch={setSearchTerm} />

			{/* Sort Button */}
			<SortButton
				onSort={() => {
					setSearchTerm("");
					setIsModalVisible(true);
				}}
			/>

			{/* Sort Modal */}
			<SortModal
				visible={isModalVisible}
				onDismiss={() => setIsModalVisible(false)}
				onSelectSort={handleSelectSort}
			/>

			{/* List Container */}
			<View style={styles.listContainer}>
				{loading ? (
					<DisplayLoading />
				) : error ? (
					<DisplayError error={error} />
				) : (
					<FlatList
						data={filteredCountries}
						keyExtractor={(item: { cca3: string }) => item.cca3}
						renderItem={({ item }: { item: Country }) => (
							<CountryCard country={item} />
						)}
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
		marginTop: 16,
	},
});
