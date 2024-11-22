import { Text, View, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text>Hello There from Hanstech</Text>
      </View>

      <View style={styles.bottomView}>
        <Text>Hi There from World</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  topView: { flex: 0.5, alignItems: "center", justifyContent: "center", backgroundColor: "#bbb" },

  bottomView: { flex: 0.5, alignItems: "center", justifyContent: "center", backgroundColor: "#aca6a6" },
})
