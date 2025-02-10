import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Link } from "expo-router";

export default function App() {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Text>Hello World</Text>
			<Link href="/about">About</Link>
			<Link href="/country/Canada">Canada Detailed Page</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
