import { StyleSheet } from "react-native";
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
	} = country;

	return (
		<Card mode="outlined" style={styles.card}>
			<Card.Cover style={styles.image} source={{ uri: png }} alt={alt} />
			<Card.Title
				title={common}
				titleVariant="titleLarge"
				subtitle={official}
				subtitleVariant="titleMedium"
			/>
			<Card.Content>
				<Text variant="titleMedium">
					{Object.values(nativeName).map(({ official }) => official)}
				</Text>
				<Text variant="titleMedium">Capital: {capital}</Text>
				<Text variant="titleMedium">Region: {region}</Text>
			</Card.Content>
		</Card>
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
