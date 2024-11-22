import { Feather } from "@expo/vector-icons"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function WelcomeScreen() {
  return (
    <View >
      <View style={styles.welcomeView}>
        <Text style={styles.viewFont(40, "red", "normal", 500)}>Find the Most</Text>
        <Text style={styles.viewFont(45, "blue", "normal", 600)}>Luxurious Goodies</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("Search button pressed")
          }}
        >
          <Feather name="search" size={25} style={styles.searchICon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeView: { flex: 0.5, justifyContent: "center", alignItems: "center", marginTop:100},

  viewFont: (size, color, style, weight) => ({
    fontSize: size,
    color: color,
    fontStyle: style,
    fontWeight: weight,
  }),

  
  searchICon: {
    color: "grey",
    marginTop:20,
    marginLeft: 20,
    alignItems: "flex-start",
  },
})

export default WelcomeScreen

/** In creating component use the pascal style code. First word caplock, next word if any caplock, no spacing
 * Then you must import the class and components you will use from the react native library
 * Then end your component with export default: This gives permission for other component in your app
 * to access it.
 */

/**To create a reusable style component, give it the attributes you need to change in the stylesheet
 * and change them in the component */

/**To use icons we install the required library: npx expo install @expo/vector-icons
 * use the Feather library
 */
