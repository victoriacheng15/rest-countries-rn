import { Stack } from "expo-router";
import { View, Text } from "react-native";

type CountryParmas = {
	country?: string;
};

export default function Layout() {
	return (
		<>
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
				<Stack.Screen name="index" options={{ title: "Home" }} />
				<Stack.Screen name="about" options={{ title: "About" }} />
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
		</>
	);
}
