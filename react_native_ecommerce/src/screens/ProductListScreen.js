import { View, Text, FlatList, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from '../../styles'

const localProductList = [
  {id:"1A", title: "classic furniture", price:"$300", path: require("../../assets/img/fn5.jpg")},
  {id:"1B", title: "beautiful furniture", price:"$200",path: require("../../assets/img/fn3.jpg")},
  {id:"1C", title: "comfy sofa", price:"$100", path: require("../../assets/img/fn2.jpg")},
  {id:"1D", title: "vintage furniture", price:"$250",path: require("../../assets/img/fn4.jpg")},
]

export default function ProductList() {
  const renderItem =({item})=>{
    return (
      <View style={styles.imageContainer}>
      <Image style={styles.image}
      source={item.path}
    />
    <View style={styles.details}>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
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