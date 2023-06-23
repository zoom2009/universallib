import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { AvoidSoftInput } from 'react-native-avoid-softinput'

AvoidSoftInput.setShouldMimicIOSBehavior(true)

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
