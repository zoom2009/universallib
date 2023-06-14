import { Accordion } from "app/components/Accordion"
import { Alert } from "app/components/Alert"
import { Button } from "app/components/Button"
import { CameraPicker } from "app/components/CameraPicker"
import { CheckBox } from "app/components/CheckBox"
import { ScrollView, Text, TouchableOpacity, View } from "app/components/ComponentWithTailwind"
import { DatePicker } from "app/components/DatePicker"
import { Dropdown } from "app/components/Dropdown"
import { Icon } from "app/components/Icon"
import { ImagePicker } from "app/components/ImagePicker"
import { Input } from "app/components/Input"
import { Label } from "app/components/Label"
import { Toast } from "app/components/Toast"
import theme from "app/global/theme"
import { getDateTimestamp } from "app/logics/date"
import { useRef, useState } from "react"

export const DemoScreen = () => {
  const toastRef: any = useRef(null)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowAccordion, setIsShowAccordion] = useState(false)
  const [isShowCamera, setIsShowCamera] = useState(false)

  return (
    <View className="bg-info-background flex flex-1 flex-col item-center">
      <CameraPicker
        onClose={() => setIsShowCamera(false)}
        isShowCamera={isShowCamera}
        onChangeEffect={console.log}  
      />
      <Alert
        show={isShowAlert}
        title="Hi Alert"
        message="Nostrud laborum aute consectetur nostrud deserunt est enim ullamco eiusmod."
        closeOnTouchOutside
        closeOnHardwareBackPress
        showCancelButton
        showConfirmButton
        confirmText="OK"
        cancelText="CLOSE"
        onCancelPressed={() => setIsShowAlert(false)}
        onConfirmPressed={() => setIsShowAlert(false)}
      />
      <Toast ref={toastRef} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 30, paddingBottom: 100, paddingHorizontal: '5%' }}>
        <Label>
          This is Label 1
        </Label>
        <Label required>
          This is Label 2
        </Label>
        <Label bold>
          This is Label 3
        </Label>
        <Label required bold>
          This is Label 4
        </Label>
        <Text bold className="mt-10 text-xl text-primary">Many Icons Out there!</Text>
        <View className="flex flex-row p-4">
          <Icon.Phone size={40} color={theme.colors.warning} />
          <Icon.Activity size={40} color={theme.colors.primary} />
          <Icon.Baby weight="bold" size={40} color={theme.colors.success} />
          <Icon.Airplane weight="thin" size={40} color={theme.colors.danger} />
          <Icon.Image weight="fill" size={40} color={theme.colors.info} />
        </View>
        <View className="h-8" />
        <TouchableOpacity className="flex flex-row items-end" onPress={() => setIsShowAccordion(prev => !prev)}>
          <Text bold className="text-primary text-xl pr-2">Toggle Text</Text>
          {!isShowAccordion
            ? <Icon.CaretDown size={24} weight="bold" color={theme.colors.primary} />
            : <Icon.CaretUp size={24} weight="bold" color={theme.colors.primary} />
          }
        </TouchableOpacity>
        <View className="h-4" />
        <Accordion isOpen={isShowAccordion} duration={0.25}>
          <Text>Excepteur dolor sint deserunt nulla. Officia anim culpa pariatur exercitation esse Lorem occaecat velit irure laboris excepteur. Nisi laborum adipisicing incididunt dolore elit ex voluptate amet. Excepteur dolore ad Lorem non sint quis esse id sint mollit aute. Do dolore anim laborum reprehenderit. Labore exercitation velit officia tempor non aliqua excepteur id nostrud aute do exercitation laboris laboris. Nostrud irure qui duis velit amet aliquip officia est qui nostrud. Aliqua duis excepteur deserunt adipisicing aute et tempor velit sit deserunt labore velit duis consectetur. Incididunt laborum minim aliquip fugiat sunt officia nostrud in quis deserunt pariatur. Adipisicing pariatur non nostrud duis. Esse eiusmod Lorem sint minim eu adipisicing do enim sit proident. Excepteur sunt ipsum sint ex fugiat. Adipisicing sint excepteur deserunt nisi do.</Text>
        </Accordion>
        <View className="h-8" />
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
        <Button
          onPress={() => setIsShowAlert(true)}
          type="success"
          text="Show Alert"
          bold
        />
        <View className="h-8" />
        <Button
          onPress={() => toastRef.current.show('Hello This is Toast')}
          type="info"
          text="Show Toast"
          bold
        />
        <View className="h-8" />
        <ImagePicker
          onChangeEffect={console.log}
          value={[]}
          multiple
          quality={4}
        />
        <View className="h-8" />
        <Button
          onPress={() => setIsShowCamera(true)}
          type="primary"
          text="Show Camera"
          bold
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
        <Input
          onChangeEffect={console.log}
          value="HI MOM, Ea deserunt minim adipisicing do adipisicing et anim. Proident pariatur dolore qui ut culpa dolore. PloreCillum cillum adipisicing aliqua commodo nostrud minim commodo. HI MOM, Ea deserunt minim adipisicing do adipisicing et anim. Proident pariatur dolore qui ut culpa dolore. PloreCillum cillum adipisicing aliqua commodo nostrud minim commodo"
          bold
          errorMessage="so sad you got some error message."
          RightIcon={<Icon.GameController size={24} color="red" />}
        />
        <View className="h-8" />
        <Input
          label="Hi I'm Text Area"
          isTextArea
          onChangeEffect={console.log}
          value=""
          bold
          required
          placeholder="this text area"
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
        <View className="h-8" />
        <DatePicker
          onChangeEffect={console.log}
          value={getDateTimestamp()}
          placeholder="select date"
          label="Date Picker"
          bold
          required
          errorMessage="Ea nostrud ullamco ex id."
        />
        <View className="h-8" />
      </ScrollView>
    </View>
  )
}
