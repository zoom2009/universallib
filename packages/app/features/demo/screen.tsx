import { Button } from "app/components/Button"
import { CheckBox } from "app/components/CheckBox"
import { ScrollView, View } from "app/components/ComponentWithTailwind"
import { Dropdown } from "app/components/Dropdown"
import { Icon } from "app/components/Icon"
import { Input } from "app/components/Input"
import { Label } from "app/components/Label"
import theme from "app/global/theme"

export const DemoScreen = () => {
  return (
    <View className="bg-info-background flex flex-1 flex-col item-center px-[5%] py-10">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Label required bold>
          This is Label
        </Label>
        <Button
          onPress={() => {}}
          type="danger-outline"
          text="Outline Danger Button"
          bold
          LeftIcon={<Icon.Alien size={30} color="green" />}
        />
        <View className="h-8" />
        <Button
          onPress={() => {}}
          type="warning"
          text="Normal Warning Button"
          bold
          LeftIcon={<Icon.Alien size={30} color="#555" />}
          RightIcon={<Icon.Airplane size={30} color={theme.colors.danger} />}
        />
        <View className="h-8" />
        <Button
          onPress={() => {}}
          type="info"
          text="Full Info Button"
          bold
          isFull
        />
        <View className="h-8" />
        <Input
          onChangeEffect={console.log}
          value="HI MOM, Ea deserunt minim adipisicing do adipisicing et anim."
          bold
          errorMessage="so sad you got some error message."
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
          label="radio"
          bold
          // isColumn
          required
          radio
          activeId={['1']}
          onChangeEffect={console.log}
          options={[
            { id: '1', text: 'radio1' },
            { id: '2', text: 'radio2' },
            { id: '3', text: 'radio3' },
          ]}
          errorMessage="some error message."
        />
        <View className="h-8" />
        <CheckBox
          label="checkbox & isColumn"
          bold
          isColumn
          required
          activeId={['1', '2']}
          onChangeEffect={console.log}
          options={[
            { id: '1', text: 'checkbox1' },
            { id: '2', text: 'checkbox2' },
            { id: '3', text: 'checkbox3' },
          ]}
        />
        <View className="h-8" />
        <Dropdown
          bold
          label="Dropdown With Search"
          required
          search
          onChangeEffect={console.log}
          value={{ key:'2', value: 'Appliances' }}
          errorMessage="Et eiusmod duis labore est eu est exercitation."
          options={[
            { key:'1', value: 'Mobiles', disabled:true },
            { key:'2', value: 'Appliances' },
            { key:'3', value: 'Cameras' },
            { key:'4', value: 'Computers', disabled:true },
            { key:'5', value: 'Vegetables' },
            { key:'6', value: 'Diary Products' },
            { key:'7', value: 'Drinks' },
          ]}
        />
        <View className="h-8" />
        <Dropdown
          bold
          label="Dropdown Without Search"
          required
          onChangeEffect={console.log}
          value={{ key:'2', value: 'Appliances' }}
          options={[
            { key:'1', value: 'Mobiles', disabled:true },
            { key:'2', value: 'Appliances' },
            { key:'3', value: 'Cameras' },
            { key:'4', value: 'Computers', disabled:true },
            { key:'5', value: 'Vegetables' },
            { key:'6', value: 'Diary Products' },
            { key:'7', value: 'Drinks' },
          ]}
        />
      </ScrollView>
    </View>
  )
}
