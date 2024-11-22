import { View, Text, StyleSheet } from "react-native"

function WelcomeScreen() {
    return (
      <View style={styles.welcomeView}>
        <Text>Welcome to the React Native Course</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    welcomeView: { flex: 0.4, justifyContent: "center", alignItems: "center" },
  })

  export default WelcomeScreen;

/** In creating component use the pascal style code. First word caplock, next word if any caplock, no spacing
 * Then you must import the class and components you will use from the react native library
 * Then your component my export default: This gives permission for other component in your app
 * to access it.
 */