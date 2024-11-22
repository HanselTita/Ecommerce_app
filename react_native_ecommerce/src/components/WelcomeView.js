import { View, Text, StyleSheet } from "react-native"

function WelcomeScreen() {
  return (
    <View style={styles.welcomeView}>
      <Text style={styles.viewFont("red", 600, "normal")}>Welcome</Text>
      <Text style={styles.viewFont("blue", 600, "italic")}>To the React Native Course</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeView: { flex: 0.4, justifyContent: "center", alignItems: "center" },
  viewFont: (color, weight, style) => ({
    fontsize: 18,
    color: color,
    fontWeight: 600,
    fontStyle:style

  }),
})

export default WelcomeScreen

/** In creating component use the pascal style code. First word caplock, next word if any caplock, no spacing
 * Then you must import the class and components you will use from the react native library
 * Then end your component with export default: This gives permission for other component in your app
 * to access it.
 */

/**To create a reusable style component, give it the attributes you need to change in the stylesheet
 * and change them in the component */
