import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "@/utils";

export default function DisplayEmptyList() {
	return (
		<View style={styles.container}>
			<Text style={styles.emptyText}>No countries found.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyText: {
		fontSize: 16,
		color: COLORS.primary,
	},
});
