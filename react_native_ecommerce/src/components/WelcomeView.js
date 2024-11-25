import { Feather, Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

function WelcomeView() {

  return (
    <View style={{ }}>
      <View>
        <Text style={styles.welcomeTxt("#000", 70)}>Find The Most</Text>

        <Text style={styles.welcomeTxt("#2A4D50", 0)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>

        <TouchableOpacity onPress={()=>{
          console.log("I am tapped");
        }}>
          <Feather name = "search" size={24} style={styles.searchIcon}/>
        </TouchableOpacity>

        <TextInput   
          placeholder="What are you looking for"
          style={styles.searchInput}
        />
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: 38,
    color: color,
    marginTop: top,
    marginHorizontal:12
  }),

  searchIcon:{
    marginTop:12,
    color:"#83829A",
    marginLeft:10
  },
  searchContainer:{
    flexDirection:"row",
    justifyContent:"center",
    height:50,
    marginHorizontal:16
  },
  searchInput:{
    width:"100%"
  }

});

export default WelcomeView;


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
