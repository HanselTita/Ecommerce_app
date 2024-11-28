import { Text, View, TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { theme } from "./theme";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";



const HomeHeadingComponent =() =>{
    const nav = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}> New Arrivals</Text>
            <TouchableOpacity onPress={()=>nav.navigate("ProductList")}>
                <Entypo name="grid" size={theme.sizes.xlarge}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default HomeHeadingComponent;

/**
 * import useNavigation to enable navigation fromt his page to another
 * create a const nav to use the unseNavigation inside HomeHeadingComponent function
 * implement the navigation object in the onPress function
 * Navigation component uses the name of the navigation object in order to navigate properly,
 */