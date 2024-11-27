import { Feather, Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { theme } from "./theme"
import styles from "../../styles"



function WelcomeComponent() {
  return (
    <View style={{}}>
      <View>
        <Text style={styles.welcomeTxt(theme.colors.black, 70)}>Find The Most</Text>

        <Text style={styles.welcomeTxt(theme.colors.gray, 0)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("I am tapped")
          }}
        >
          <Feather name="search" size={theme.sizes.xlarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput placeholder="What are you looking for" style={styles.searchInput} />
        </View>
        <View style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={36} color={theme.colors.offwhite} />
        </View>
      </View>
    </View>
  )
}


export default WelcomeComponent

/** In creating component use the pascal style code. First word caplock, next word if any caplock, no spacing
 * Then you must import the class and components you will use from the react native library
 * Then end your component with export default: This gives permission for other component in your app
 * to access it.
 */

/**To create a reusable style component, give it the attributes you need to change in the stylesheet
 * and change them in the component */

/**To use icons we install the required library: npx expo install @expo/vector-icons
 * use the Feather library
 * Use Ionicon for camera icon, name "camera-outline"
 */
