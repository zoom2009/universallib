import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Platform } from 'react-native'
import { AvoidSoftInput } from 'react-native-avoid-softinput'

if (Platform.OS === 'ios') {
  AvoidSoftInput.setShouldMimicIOSBehavior(true)
}

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
