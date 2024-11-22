import { Text, View, StyleSheet } from "react-native"
import WelcomeScreen from "./src/components/WelcomeView"

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <View style={styles.box}>
        <Text style={{fontSize:24, fontWeight:"600"}}>Hello There from Hanstech</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  box: { flex: 0.3, alignItems: "center", justifyContent: "center", backgroundColor: "#bbb",
    margin:30, borderRadius:10, padding:30
   },
})

/**Creating a component and running it in the default component
 * The created component must return jxx.
 * In the default component, the created component must be in the main View, else it won't work
 * */

/** margin give you spacing outside your view while padding gives you spaving within your view */