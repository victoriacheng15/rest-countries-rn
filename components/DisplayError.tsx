import { StyleSheet, View, Text } from "react-native";

interface DisplayErrorProps {
	error: string;
}

export default function DisplayError({ error }: DisplayErrorProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.errorText}>Error: {error}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorText: {
		fontSize: 16,
	},
});
