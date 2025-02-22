import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { COLORS } from "@/utils";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
					activeOutlineColor={COLORS.primary}
          label="Search by country name"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});