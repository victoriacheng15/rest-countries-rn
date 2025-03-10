import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Card, Text } from "react-native-paper";

interface CountryCardProps {
	country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
	const {
		flags: { png, svg, alt },
		name: { common, official, nativeName },
		capital,
		region,
		cca3,
	} = country;

	return (
		<Link href={`/country/${cca3}`} asChild>
			<Card mode="outlined" style={styles.card}>
				<Card.Cover style={styles.image} source={{ uri: png }} alt={alt} />
				<Card.Title
					title={common}
					titleVariant="titleLarge"
					subtitle={official}
					subtitleVariant="titleMedium"
				/>
				<Card.Content>
					<Text variant="titleMedium">Capital: {capital}</Text>
					<Text variant="titleMedium">Region: {region}</Text>
				</Card.Content>
			</Card>
		</Link>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		marginBottom: 16,
		overflow: "hidden",
	},
	image: {
		borderRadius: 0,
		width: "100%",
	},
});
