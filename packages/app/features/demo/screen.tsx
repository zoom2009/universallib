import { Button } from "app/components/Button"
import { CheckBox } from "app/components/CheckBox"
import { Text, View } from "app/components/ComponentWithTailwind"
import { Icon } from "app/components/Icon"
import { Input } from "app/components/Input"
import { Label } from "app/components/Label"

export const DemoScreen = () => {
  return (
    <View className="bg-info-background flex flex-1 flex-col item-center px-[5%]">
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
      <View className="h-8" />
      <Input
        onChangeEffect={console.log}
        value="HI MOM, Ea deserunt minim adipisicing do adipisicing et anim."
        bold
        errorMessage="sss"
      />
      <View className="h-8" />
      <Input
        onChangeEffect={console.log}
        value=""
        bold
        placeholder="Incididunt ullamco eu sunt exercitation pariatur deserunt tempor dolor."
      />
      <View className="h-8" />
      <CheckBox
        label="สัตว์เลี้ยง"
        bold
        // isColumn
        required
        radio
        activeId={['1']}
        onChangeEffect={console.log}
        options={[
          { id: '1', text: 'แมว' },
          { id: '2', text: 'หมา' },
          { id: '3', text: 'ไก่' },
        ]}
        errorMessage="some error message"
      />
    </View>
  )
}
