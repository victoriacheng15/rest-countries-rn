import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "@/utils";

interface SortButtonProps {
	onSort: () => void;
}

export default function SortButton({ onSort }: SortButtonProps) {
	return (
		<TouchableOpacity style={styles.sortButton} onPress={onSort}>
			<Text style={styles.sortButtonText}>Sort</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	sortButton: {
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
	},
	sortButtonText: {
		color: "white",
		fontSize: 16,
	},
});
