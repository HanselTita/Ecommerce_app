import { FlatList, Image, View,Text } from "react-native"
import { theme } from "./theme"

const myArray = [
  {id:"1", title:"item 1"},
  {id:"2", title:"item 2"},
  {id:"3", title:"item 3"},
  {id:"4", title:"item 4"},
  {id:"5", title:"item 5"},
]

const HomeCarouselComponent = () => {

  return (
    <View>
      <View style={{height:200,
     backgroundColor:"#bbb", 
     marginHorizontal:theme.sizes.medium,
     borderRadius:theme.sizes.medium,
     justifyContent:"center",
     overflow:"hidden"}}>
    <Image style={{resizeMode:"cover", height:"100%", width:"100%"}}source={require("../../assets/img/fn1.jpg")} />
     </View>
     <View>
      <FlatList
      data={myArray}
      renderItem={({item})=><Text>{item.title} </Text>}
      keyExtractor={item=>item.id}
        />
     </View>
    </View>
  )
}

export default HomeCarouselComponent


/** overflow is used to cut out those parts of a content that overlap their boundaries. 
 * Flatlist is like a loop that cycles the according to the number of item given.
 * In a Flatlist the data is the array, the renderItem returns a component
 * in the component call and item /prop and tell it what to return, in our case "title"
 * it is good practice to include keyExtrator, to help in your app caching
*/
