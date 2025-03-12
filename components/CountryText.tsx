import { StyleSheet, View, Text } from "react-native";

interface CountryTextProps {
	contentTitle: string;
	content: string | string[];
}

export default function CountryText({
	contentTitle,
	content,
}: CountryTextProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{contentTitle}</Text>
			{typeof content === "string" ? (
				<Text style={[styles.info, styles.moveLeft]}>{content}</Text>
			) : (
				<View style={styles.moveLeft}>
					{content.map((item) => (
						<Text key={item} style={styles.info}>
							{item}
						</Text>
					))}
				</View>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 2,
		marginBottom: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	info: {
		fontSize: 16,
	},
	moveLeft: {
		marginLeft: 16,
		gap: 4,
	},
});
