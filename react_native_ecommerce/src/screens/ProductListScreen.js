import { View, Text, FlatList, SafeAreaView, Image } from 'react-native'
import React from 'react'

const localProductList = [
  {id:"1A", path: require("../../assets/img/fn5.jpg")},
  {id:"1B", path: require("../../assets/img/fn3.jpg")},
  {id:"1C", path: require("../../assets/img/fn2.jpg")},
  
]

export default function ProductList() {
  const renderItem =({item})=>{
    return (
      <View style={{width:180, height:180}}>
      <Image
      source={item.path}
    />
      </View>
   
  )}
  return (
    <SafeAreaView>
<FlatList
    data={localProductList}
    renderItem={renderItem}
        keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
    
  )
}

/**Notice we have export default at begining of our function.
 * That means no need to export default at the end of your code
 * 
 */