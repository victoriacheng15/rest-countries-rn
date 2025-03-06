import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { sortOptions, COLORS } from "@/utils";

interface SortModalProps {
	visible: boolean;
	onDismiss: () => void;
	onSelectSort: (sortType: string) => void;
}

export default function SortModal({
	visible,
	onDismiss,
	onSelectSort,
}: SortModalProps) {
	return (
		<Modal
			visible={visible}
			transparent={true}
			animationType="fade"
			onRequestClose={onDismiss}
		>
			<View style={styles.modalOverlay}>
				<View style={styles.modalContent}>
					<Text style={styles.modalTitle}>Sort By</Text>
					{sortOptions.map((option) => (
						<Pressable
							key={option.value}
							style={styles.sortOption}
							onPress={() => onSelectSort(option.value)}
						>
							<Text style={styles.sortOptionText}>{option.label}</Text>
						</Pressable>
					))}
					<Pressable style={styles.closeButton} onPress={onDismiss}>
						<Text style={styles.closeButtonText}>Close</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: "90%",
		backgroundColor: "white",
		borderRadius: 10,
		padding: 30,
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
		textAlign: "center",
	},
	sortOption: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	sortOptionText: {
		fontSize: 18,
		textAlign: "center",
	},
	closeButton: {
		fontSize: 18,
		marginTop: 20,
		padding: 10,
		backgroundColor: COLORS.secondary,
		borderRadius: 5,
		alignItems: "center",
	},
	closeButtonText: {
		color: COLORS.primary,
		fontSize: 16,
	},
});
