import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DemoScreen } from 'app/features/demo/screen'

const Stack = createNativeStackNavigator<{
  demo: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="demo"
        component={DemoScreen}
        options={{
          title: 'Demo',
        }}
      />
    </Stack.Navigator>
  )
}
