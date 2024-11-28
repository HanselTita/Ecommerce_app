
import HomeScreen from "./src/screens/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ProductList from "./src/screens/ProductListScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomeScreen}/>
    <Stack.Screen name="ProductList" component={ProductList}/>
      </Stack.Navigator>
 </NavigationContainer>
  )
}


/**Creating a component and running it in the default component
 * The created component must return jxx.
 * In the default component, the created component must be in the main View, else it won't work
 * */

/** margin give you spacing outside your view while padding gives you spaving within your view */

/**Adding touchableOpacity with replaces onClick of javascript */

/** It is cleaner to use SafeAreaView, which comes with its own components
 *  and remove the View Items 
 * 
 *  npm install @react-navigation/native
 *  npm install @react-navigation/native-stack  helps in navigating in our app
 * npm install react-native-screens react-native-safe-area-context 
 * helps to maintain screen size
 * import NavigationContainer and CreateNativeStackNavigator
 * and incorporate the HomeScreen inside NavigationContainer and 
 * Stack.Navigator as Stack.Screen component*/
