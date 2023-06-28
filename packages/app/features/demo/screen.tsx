import { useState } from "react"
import { Accordion } from "app/components/Accordion"
import { Alert } from "app/components/Alert"
import { AvoidSoftInputView } from "app/components/AvoidSoftInputView"
import { Button } from "app/components/Button"
import { CameraPicker } from "app/components/CameraPicker"
import { Grid, LineChart, XAxis } from "app/components/Chart"
import { CheckBox } from "app/components/CheckBox"
import { ScrollView, useScrollTo, Target } from '@nandorojo/anchor'
import { Image, Text, TouchableOpacity, View } from "app/components/ComponentWithTailwind"
import { DatePicker } from "app/components/DatePicker"
import { Dropdown } from "app/components/Dropdown"
import { Icon } from "app/components/Icon"
import { ImagePicker } from "app/components/ImagePicker"
import { ImagesView } from "app/components/ImagesView"
import { Input } from "app/components/Input"
import { Label } from "app/components/Label"
import { MapPicker } from "app/components/MapPicker"
import { Pagination } from "app/components/Pagination"
import { Popover } from "app/components/Popover"
import { Skeleton } from "app/components/Skeleton"
import { Cell, TableWrapper } from "app/components/Table"
import { ToastRootProvider } from "app/components/Toast"
import { displayToast } from "app/functions/displayToast"
import { getInsets } from "app/functions/getInsets"
import theme from "app/global/theme"
import { getDateTimestamp } from "app/logics/date"
import { useWindowDimensions } from "react-native"
import { LocalImage } from "app/components/LocalImage"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Layout } from "app/components/Layout"
import { FullModal } from "app/components/FullModal"

const CustomScrollTo = () => {
  const { scrollTo } = useScrollTo()
  const onPress = () => {
    scrollTo('bottom-content', { animated: true, offset: -10 })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="text-xl text-primary pb-4">Scroll down</Text>
    </TouchableOpacity>
  )
}

const _DemoScreen = () => {
  const insets = getInsets()
  const { width } = useWindowDimensions()
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowAccordion, setIsShowAccordion] = useState(false)
  const [isShowCamera, setIsShowCamera] = useState(false)
  const [isShowPopover, setIsShowPopover] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)

  const chartData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <AvoidSoftInputView>
      <View className="bg-info-background flex flex-1">
        <View className="mx-auto flex flex-1 flex-col item-center">
          <FullModal
            visible={isShowModal}
            onClose={() => setIsShowModal(false)}
          >
            <Text bold className="text-6xl text-red-400 text-center py-10">Hello Modal</Text>
          </FullModal>
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
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 30,
              paddingBottom: 100,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }}
            style={{ paddingHorizontal: '5%' }}
          >
            <CustomScrollTo />
            <Label>
              This is Label 1
            </Label>
            <Label color={theme.colors.primary}>
              This is Label 2 (with color)
            </Label>
            <Label bold>
              This is Label 3 (with bold)
            </Label>
            <Label textClassName="text-danger" required bold>
              This is Label 4 (with textClassName & required)
            </Label>
            <View className="h-8" />
            <Label bold>Resposive Layout</Label>
            <View>
              <View className="p-4 my-4 w-full border-2 border-[#ccc] rounded-xl">
                <Label bold>2_1</Label>
                <View className="h-2" />
                <Layout.Wrapper>
                  <Layout._2_1 className="border-[1px] p-4">
                    <Text>1</Text>
                  </Layout._2_1>
                  <Layout._2_1 className="border-[1px] p-4">
                    <Text>2</Text>
                  </Layout._2_1>
                  <Layout._2_1 className="border-[1px] p-4">
                    <Text>3</Text>
                  </Layout._2_1>
                </Layout.Wrapper>
              </View>
              <View className="p-4 my-4 w-full border-2 border-[#ccc] rounded-xl">
                <Label bold>4_2</Label>
                <View className="h-2" />
                <Layout.Wrapper>
                  <Layout._4_2 className="border-[1px] p-4">
                    <Text>1</Text>
                  </Layout._4_2>
                  <Layout._4_2 className="border-[1px] p-4">
                    <Text>2</Text>
                  </Layout._4_2>
                  <Layout._4_2 className="border-[1px] p-4">
                    <Text>3</Text>
                  </Layout._4_2>
                  <Layout._4_2 className="border-[1px] p-4">
                    <Text>4</Text>
                  </Layout._4_2>
                </Layout.Wrapper>
              </View>
              <View className="p-4 my-4 w-full border-2 border-[#ccc] rounded-xl">
                <Label bold>_8_6_4_2_1</Label>
                <View className="h-2" />
                <Layout.Wrapper>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>1</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>2</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>3</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>4</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>5</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>6</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>7</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>8</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>9</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>10</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>11</Text>
                  </Layout._8_6_4_2_1>
                  <Layout._8_6_4_2_1 className="border-[1px] p-4">
                    <Text>12</Text>
                  </Layout._8_6_4_2_1>
                </Layout.Wrapper>
              </View>
            </View>
            <View className="h-8" />
            <Label bold>All image include cache & placeholder.</Label>
            <View className="h-4" />
            <View className="justify-around items-center flex flex-row">
              <Image
                contentFit="cover"
                style={{ borderRadius: 14, width: 140, height: 140 }}
                source={{ uri: 'https://i.pinimg.com/originals/ec/b9/2d/ecb92d18c7855c986a5571c1b6f7cad2.jpg' }}
              />
              <LocalImage
                contentFit="cover"
                style={{ borderRadius: 14, width: 140, height: 140 }}
                source={require('app/assets/mockImages/mock-cat.jpg')}
              />
            </View>
            <View className="h-8" />
            <Label bold>Carosel (Images View)</Label>
            <View className="h-4" />
            <View className="justify-center items-center">
              <ImagesView
                height={width * 0.8 / 2}
                width={width * 0.8}
                images={[
                  { uri: 'https://picsum.photos/id/11/800/1000' },
                  { uri: 'https://picsum.photos/id/22/800/1000' },
                  { uri: 'https://picsum.photos/id/33/800/1000' },
                  { uri: 'https://picsum.photos/id/44/800/1000' },
                  { uri: 'https://picsum.photos/id/55/800/1000' },
                ]}
                contentFit="contain"
              />
            </View>
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
              <Text bold className="text-primary text-xl pr-2">(Accordion) {!isShowAccordion ? 'Show More Text' : 'Hide Text'}</Text>
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
              onPress={() => setIsShowModal(true)}
              type="info"
              text="Full Info Button <Show Modal>"
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
              onPress={() => displayToast({ message: 'This is Toast', type: 'info' })}
              type="danger"
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
            <Popover
              contentStyle={{ width: 300 }}
              Content={(
                <View className="p-2">
                  <Text>
                    Hi Duis amet occaecat sit aliqua veniam sint in elit adipisicing magna fugiat ut qui elit.
                  </Text>
                </View>
              )}

              isVisible={isShowPopover}
              onClose={() => setIsShowPopover(false)}
            >
              <Button
                onPress={() => setIsShowPopover(true)}
                type="warning-outline"
                text="Show Popover"
                bold
              />
            </Popover>
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
            <Input
              label="Mask Text input"
              onChangeEffect={console.log}
              value=""
              bold
              required
              isMask
              maskString="AAA-999"
              placeholder="ABC-123"
            />
            <View className="h-8" />
            <Input
              label="Mask Text input currency"
              onChangeEffect={console.log}
              value=""
              bold
              required
              isMask
              maskType="currency"
              maskString="999999999"
              maskOptions={{
                prefix: '$',
                decimalSeparator: '.',
                groupSeparator: ',',
                precision: 2
              }}
              placeholder="card id"
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
            <View className="h-12" />
            <Label bold>Map Picker</Label>
            <View className="-mt-4" />
            <MapPicker
              defaultLocation={{
                lat: 13.736717,
                lng: 100.523186,
              }}
              googleMapsApiKey="AIzaSyA-ByHssW06jGxkBr4T0LfIjE8c8s173SA"
              onChangeEffect={console.log}
            />
            <View className="h-8" />
            <Label bold>Table Component</Label>
            <View className="h-8" />
            {[
              { id: '1', image: 'https://picsum.photos/id/1/300/300', title: 'Et incididunt exercitation exercitation exercitation labore fugiat dolore.' },
              { id: '2', image: 'https://picsum.photos/id/2/300/300', title: 'Cupidatat sunt quis velit in consequat culpa aute in fugiat consequat.' },
              { id: '3', image: 'https://picsum.photos/id/3/300/300', title: 'Labore consequat laborum et occaecat veniam consectetur.' },
              { id: '4', image: 'https://picsum.photos/id/4/300/300', title: 'Et sint reprehenderit consectetur et qui non elit ad mollit ullamco id consectetur ullamco et.' },
              { id: '5', image: 'https://picsum.photos/id/5/300/300', title: 'Pariatur consequat magna amet nostrud cupidatat pariatur ad duis nostrud culpa.' },
            ].map(({ id, image, title }) => (
              <TableWrapper key={id} style={{ borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', marginBottom: 20 }}>
                <Cell
                  data={<Text className="font-bold text-md text-[#555]">{id}.</Text>}
                  // @ts-ignore
                  width={'20%'}
                  style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}
                />
                <Cell
                  data={<Text className="font-bold text-md text-primary">{title}.</Text>}
                  // @ts-ignore
                  width={'40%'}
                  style={{ justifyContent: 'center', height: 100 }}
                />
                <Cell
                  data={<Image contentFit="cover" style={{ width: 100, height: '90%', borderRadius: 10 }} source={{ uri: image }} />}
                  // @ts-ignore
                  width={'40%'}
                  style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}
                />
              </TableWrapper>
            ))}
            <View className="h-8" />
            <Label bold>Some Chart (Line Chart & many)</Label>
            <View className="h-4" />
            <View style={{ height: 200, padding: 20, maxWidth: 400 }}>
              <LineChart
                style={{ flex: 1 }}
                data={chartData}
                gridMin={0}
                contentInset={{ top: 10, bottom: 10 }}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
              >
                <Grid />
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10 }}
                data={chartData}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'black' }}
              />
            </View>
            <View className="h-8" />
            <Label bold>Pagination</Label>
            <View className="h-4" />
            <Pagination
              current={10}
              total={39}
              onPageChange={console.log}
            />
            <View className="h-8" />
            <Label bold>Skeleton</Label>
            <View className="h-8" />
            <View className="bg-white pb-6 px-10 flex flex-row">
              <Layout.Wrapper>
                <Layout._2_1 className="mt-6">
                  <Skeleton borderRadius={10} width={200} height={200} />
                  <View className="h-4" />
                  <Skeleton borderRadius={20} width={200} height={20} />
                  <View className="h-4" />
                  <Skeleton borderRadius={20} width={150} height={20} />
                </Layout._2_1>
                <Layout._2_1 className="mt-6">
                  <Skeleton borderRadius={100} width={100} height={100} />
                </Layout._2_1>
              </Layout.Wrapper>
            </View>
            <Target name="bottom-content">
            </Target>
          </ScrollView>
        </View>
      </View>
    </AvoidSoftInputView>
  )
}

// with provider here
export const DemoScreen = () => (
  <GestureHandlerRootView>
    <ToastRootProvider>
      <_DemoScreen />
    </ToastRootProvider>
  </GestureHandlerRootView>
)
