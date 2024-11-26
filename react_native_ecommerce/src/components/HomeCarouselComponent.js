import { Image, View } from "react-native"
import { theme } from "./theme"

const HomeCarouselComponent = () => {

  return (
    <View style={{height:200,
     backgroundColor:"#bbb", 
     marginHorizontal:theme.sizes.medium,
     borderRadius:theme.sizes.medium,
     overflow:"hidden"}}>
    <Image style={{resizeMode:"cover", height:"100%", width:"100%"}}source={require("../../assets/img/fn1.jpg")} />
     </View>
  )
}

export default HomeCarouselComponent


/** overflow is used to cut out those parts of a content that overlap their boundaries. */
