import { StyleSheet } from "react-native"
import { theme } from "./src/components/theme"


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
,

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

  dummyContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"

  },
  text: {
    fontSize:20,
    fontWeight:'bold'
  },

imageContainer:{
flex:1,
alignItems:"center",
height:230,
overflow:"hidden",
margin:10,
borderRadius:theme.sizes.small
},

image:{
  width:"100%",
  height:180,
  borderRadius:theme.sizes.small
},

details:{
  padding: theme.sizes.small
}
})

export default styles;