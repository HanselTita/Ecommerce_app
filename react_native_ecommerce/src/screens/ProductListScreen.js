import { View, Text, FlatList, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from '../../styles'

const localProductList = [
  {id:"1A", path: require("../../assets/img/fn5.jpg")},
  {id:"1B", path: require("../../assets/img/fn3.jpg")},
  {id:"1C", path: require("../../assets/img/fn2.jpg")},
  {id:"1D", path: require("../../assets/img/fn4.jpg")},
]

export default function ProductList() {
  const renderItem =({item})=>{
    return (
      <View style={styles.imageContainer}>
      <Image style={styles.image}
      source={item.path}
    />
    <View>
      <Text>Title</Text>
    </View>
      </View>
   
  )}
  return (
    <SafeAreaView>
<FlatList
    data={localProductList}
    renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
    </SafeAreaView>
    
  )
}

/**Notice we have export default at begining of our function.
 * That means no need to export default at the end of your code
 * introduce numColumn and generate style for productlist
 */