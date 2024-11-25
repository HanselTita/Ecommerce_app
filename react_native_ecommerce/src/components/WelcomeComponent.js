import { Feather, Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { theme } from "./theme"

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

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: 38,
    color: color,
    marginTop: top,
    marginHorizontal: theme.sizes.small,
  }),

  searchIcon: {
    marginTop: theme.sizes.small,
    color: theme.colors.gray,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginHorizontal: theme.sizes.small,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.medium,
    marginVertical: theme.sizes.medium,
  },
  searchInput: {
    width: "100%",
    height: "100%",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.small,
    marginRight: theme.sizes.small,
  },
  searchBtn: {
    justifyContent: "center",
    width: 50,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    borderRadius: theme.sizes.small,
  },
})

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
