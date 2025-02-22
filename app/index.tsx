import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Card, Text, ActivityIndicator } from "react-native-paper";
import { COLORS } from "@/utils";
import { useCountries } from "@/hooks/useCountryList";

export default function App() {
	const { countryList, loading, error } = useCountries();
	const [search, setSearch] = useState("");

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<TextInput
					mode="outlined"
					activeOutlineColor={COLORS.primary}
					label="Search by country name"
					value={search}
					onChangeText={(text) => setSearch(text)}
				/>
			</View>
			{/* List Container */}
			<View style={styles.listContainer}>
				{loading ? (
					<View style={styles.centerContainer}>
						<ActivityIndicator size="large" color={COLORS.primary} />
						<Text style={styles.loadingText}>Loading countries...</Text>
					</View>
				) : error ? (
					<View style={styles.centerContainer}>
						<Text style={styles.errorText}>Error: {error}</Text>
					</View>
				) : (
					<FlatList
						data={countryList}
						keyExtractor={(item) => item.cca3}
						renderItem={({ item }) => (
							<Card mode="outlined" style={styles.card}>
								<Card.Cover source={{ uri: item.flags.svg }} />
								<Card.Title title={item.name.common} />
								<Card.Content>
									<Text>
										<Text>Capital: </Text> {item.capital}
									</Text>
									<Text>
										<Text>Region: </Text> {item.region}
									</Text>
								</Card.Content>
							</Card>
						)}
						ListEmptyComponent={
							// Show message if no countries match the search
							<View style={styles.centerContainer}>
								<Text style={styles.emptyText}>No countries found.</Text>
							</View>
						}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.tertiary,
		padding: 16,
	},
	container: {
		marginBottom: 16,
	},
	listContainer: {
		flex: 1,
	},
	card: {
		marginBottom: 16,
	},
	centerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	loadingText: {
		marginTop: 16,
		fontSize: 16,
		color: COLORS.primary,
	},
	errorText: {
		fontSize: 16,
	},
	emptyText: {
		fontSize: 16,
		color: COLORS.primary,
	},
});
