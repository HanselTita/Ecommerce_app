import { Text, View, StyleSheet } from "react-native"
import WelcomeView from "./src/components/WelcomeView"

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeView />

      <View style={styles.box}>
        <Text style={{ fontSize: 20 }}>Hello</Text>
        <Text style={{ fontSize: 22 }}>Let's program in</Text>
        <Text style={{ fontSize: 25 }}>React Native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",

    backgroundColor: "#bbb",
  },

  box: {
    flexDirection: "column",

    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    padding: 40,
  },
})

/**Creating a component and running it in the default component
 * The created component must return jxx.
 * In the default component, the created component must be in the main View, else it won't work
 * */

/** margin give you spacing outside your view while padding gives you spaving within your view */

/**Adding touchableOpacity with replaces onClick of javascript */
