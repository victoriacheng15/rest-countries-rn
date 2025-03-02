import { Stack } from "expo-router";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { COLORS } from "@/utils";

type CountryParmas = {
	country?: string;
};

export default function Layout() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: "#000001",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen name="index" options={{ title: "Country Finder" }} />
				<Stack.Screen
					name="country/[country]"
					options={({ route }) => {
						const params = route.params as CountryParmas;
						return {
							title: params.country || "country",
						};
					}}
				/>
			</Stack>
			<View>
				<Text>Footer placeholder</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.tertiary,
	},
});
