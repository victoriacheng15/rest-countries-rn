import { Stack } from "expo-router";
import { StyleSheet, SafeAreaView } from "react-native";
import Footer from "@/components/Footer";
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
						backgroundColor: COLORS.primary,
					},
					headerTintColor: COLORS.secondary,
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen name="index" options={{ title: "World Explorer" }} />
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
			<Footer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.tertiary,
	},
});
