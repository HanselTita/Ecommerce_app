import { FlatList, Image, View,Text, Dimensions } from "react-native"
import { theme } from "./theme"

const {width} = Dimensions.get("window")

const images = [
  {id:"1A", path: require("../../assets/img/fn5.jpg")},
  {id:"1B", path: require("../../assets/img/fn3.jpg")},
  {id:"1C", path: require("../../assets/img/fn2.jpg")},
  
]


const HomeCarouselComponent = () => {
return (
  <View>
    <View
      style={{
        height: 200,
        backgroundColor: theme.colors.offWhite,
        marginHorizontal: theme.sizes.medium,
        borderRadius: theme.sizes.medium,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={{ resizeMethod: "cover", width: width, height: "100%" }}
            source={item.path}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  </View>
);
};

export default HomeCarouselComponent;


/** overflow is used to cut out those parts of a content that overlap their boundaries. 
 * Flatlist is like a loop that cycles the according to the number of item given.
 * In a Flatlist the data is the array, the renderItem returns a component
 * in the component call and item /prop and tell it what to return, in our case "title"
 * it is good practice to include keyExtrator, to help in your app caching
 * showsHorizontalScrollIndicator is to decide whether you want a bar to show when you
 * scroll through the images.
 * snapToAlignment helps the image to be centered when scrolling and not 
 * showing half of another image
 * decelerationRate helps to determine the speed of the scrolling
*/
