import { StyleSheet, View, Text } from "react-native";

interface CountryTextProps {
	contentTitle: string;
	content: string;
}

export default function CountryText({
	contentTitle,
	content,
}: CountryTextProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{contentTitle}</Text>
			<Text style={styles.info}>{content}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	info: {
		fontSize: 16,
	},
});
