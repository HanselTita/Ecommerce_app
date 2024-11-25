import {SafeAreaView } from "react-native"
import WelcomeView from "./src/components/WelcomeView"

export default function App() {
  return (
   <SafeAreaView>
      <WelcomeView />
   </SafeAreaView>
  )
}


/**Creating a component and running it in the default component
 * The created component must return jxx.
 * In the default component, the created component must be in the main View, else it won't work
 * */

/** margin give you spacing outside your view while padding gives you spaving within your view */

/**Adding touchableOpacity with replaces onClick of javascript */

/** It is cleaner to use SafeAreaView, which comes with its own components
 *  and remove the View Items */
