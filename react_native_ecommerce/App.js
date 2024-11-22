import { Text, View, StyleSheet } from "react-native"

function WelcomeScreen() {
  return (
    <View style={styles.welcomeView}>
      <Text>Welcome to the React Native Course</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
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

  topView: { flex: 0.3, alignItems: "center", justifyContent: "center", backgroundColor: "#bbb" },

  bottomView: { flex: 0.3, alignItems: "center", justifyContent: "center", backgroundColor: "#aca6a6" },

  welcomeView: { flex: 0.4, justifyContent: "center", alignItems: "center" },
})

/**Creating a component and running it in the default component
 * The created component must return jxx.
 * In the default component, the created component must be in the main View, else it won't work
 * */
