import { StyleSheet, View } from "react-native";
import { TextInput, Searchbar } from "react-native-paper";
import { COLORS } from "@/utils";

interface SearchInputProps {
	search: string;
	setSearch: (search: string) => void;
}

export default function SearchInput({ search, setSearch }: SearchInputProps) {
	return (
		<View style={styles.container}>
			<Searchbar
				style={styles.input}
				placeholder="Search by country name"
				value={search}
				onChangeText={(text) => setSearch(text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	input: {
		backgroundColor: COLORS.secondary,
		borderRadius: 10,
	},
});
