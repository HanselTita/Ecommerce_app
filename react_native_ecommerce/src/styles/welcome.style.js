import { StyleSheet } from "react-native"
import { theme } from "../components/theme"


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

  export default styles;