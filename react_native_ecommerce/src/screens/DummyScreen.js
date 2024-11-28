import { Text, View } from "react-native"
import styles from "../../styles"

const DummyScreen =() =>{
    return (
        <View style={styles.dummyContainer}>
        <Text style={styles.text}> Hello! This is DummyScreen</Text>
        </View>
    )

}

export default DummyScreen;