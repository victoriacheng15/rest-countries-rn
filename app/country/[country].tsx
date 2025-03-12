import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import DisplayLoading from "@/components/DisplayLoading";
import DisplayError from "@/components/DisplayError";
import CountryText from "@/components/CountryText";
import { useCountryDetail } from "@/hooks/useCountryDetail";

export default function Country() {
	const { country } = useLocalSearchParams();
	const { country: countryData, loading, error } = useCountryDetail(country);
	const {
		name,
		region,
		subregion,
		languages,
		population,
		capital,
		area,
		timezones,
		continents,
		borders,
		flags,
	} = countryData || {};

	return (
		<View style={styles.container}>
			{loading && <DisplayLoading />}
			{error && <DisplayError error={error} />}
			<Image source={{ uri: flags?.png }} style={styles.flag} />
			<Text style={styles.title}>{name?.official}</Text>
			<ScrollView style={styles.scrollView}>
				<CountryText contentTitle="Capital: " content={capital || "N/A"} />
				<CountryText contentTitle="Continent: " content={continents || "N/A"} />
				<CountryText contentTitle="Region: " content={region || "N/A"} />
				<CountryText contentTitle="Subregion: " content={subregion || "N/A"} />
				<CountryText
					contentTitle="Area: "
					content={area?.toLocaleString() || "N/A"}
				/>
				<CountryText
					contentTitle="Population: "
					content={population?.toLocaleString() || "N/A"}
				/>
				<CountryText
					contentTitle="Languages: "
					content={languages ? Object.values(languages).join(", ") : "N/A"}
				/>
				<CountryText contentTitle="Timezone: " content={timezones || "N/A"} />
				<CountryText contentTitle="Borders: " content={borders || "N/A"} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	container: {
		flex: 1,
		padding: 30,
		gap: 8,
	},
	flag: {
		width: "100%",
		height: 250,
		marginBottom: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
});
