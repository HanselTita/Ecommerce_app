import { Text, View, TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { theme } from "./theme";
import styles from "../../styles";



const HomeHeadingComponent =() =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}> New Arrivals</Text>
            <TouchableOpacity onPress={console.log("I've been pressed")}>
                <Entypo name="grid" size={theme.sizes.xlarge}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default HomeHeadingComponent;

