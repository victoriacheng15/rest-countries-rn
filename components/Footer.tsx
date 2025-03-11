import {
	StyleSheet,
	View,
	Text,
	Linking,
	TouchableOpacity,
} from "react-native";
import { COLORS } from "@/utils";

export default function Footer() {
	const name = "Victoria Cheng";
	const linkUrl = "https://victoriacheng15.github.io/bioHub/";

	return (
		<View style={styles.footer}>
			<Text style={styles.text}>Coded by {name} | </Text>
			<TouchableOpacity onPress={() => Linking.openURL(linkUrl)}>
				<Text style={[styles.text, styles.link]}>bioHub</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		backgroundColor: COLORS.primary,
		padding: 16,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: COLORS.tertiary,
		fontSize: 14,
	},
	link: {
		color: COLORS.secondary,
		textDecorationLine: "underline",
	},
});
