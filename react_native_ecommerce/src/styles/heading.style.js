import { StyleSheet } from "react-native"
import { theme } from "../components/theme"


const styles = StyleSheet.create ({

    container:{
        marginHorizontal:theme.sizes.small+4,
        marginTop:theme.sizes.medium,
    },

    headerTitle:{
        font: theme.sizes.xlarge-7,
    },

header:{
flexDirection:"row",
justifyContent:"space-between",
}
})

export default styles;