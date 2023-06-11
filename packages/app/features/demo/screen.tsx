import { Button } from "app/components/Button"
import { Text, View } from "app/components/ComponentWithTailwind"
import { Icon } from "app/components/Icon"
import { Input } from "app/components/Input"
import { Label } from "app/components/Label"

export const DemoScreen = () => {
  return (
    <View className="bg-info-background flex flex-1 flex-col item-center">
      <Text>aa</Text>
      <Label required bold>
        HI DAD
      </Label>
      <Button
        onPress={() => {}}
        type="danger-outline"
        text="Hello"
        bold
        isFull={false}
        LeftIcon={<Icon.Alien size={30} color="green" />}
      />
      <View className="h-4" />
      <View className="w-10/12 mx-auto">
        <Input
          onChangeEffect={console.log}
          value="HI MOM, Ea deserunt minim adipisicing do adipisicing et anim."
          bold
          errorMessage="sss"
        />
      </View>
      <View className="mt-4 w-10/12 mx-auto">
        <Input
          onChangeEffect={console.log}
          value=""
          bold
          placeholder="Incididunt ullamco eu sunt exercitation pariatur deserunt tempor dolor."
        />
      </View>
    </View>
  )
}
