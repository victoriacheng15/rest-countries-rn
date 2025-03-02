import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { COLORS } from "@/utils";

export default function DisplayLoading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={COLORS.primary} />
			<Text style={styles.loadingText}>Loading countries...</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	loadingText: {
		marginTop: 16,
		fontSize: 16,
		color: COLORS.primary,
	},
});
