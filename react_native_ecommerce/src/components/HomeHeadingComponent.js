import { Text, View, TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { theme } from "./theme";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

const nav = useNavigation()

const HomeHeadingComponent =() =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}> New Arrivals</Text>
            <TouchableOpacity onPress={()=>nav.navigate("DummyPage")}>
                <Entypo name="grid" size={theme.sizes.xlarge}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default HomeHeadingComponent;

/**
 * import useNavigation to enable navigation fromt his page to another
 * create a const nav to use the unseNavigation
 * implement the navigation object in the onPress function
 */