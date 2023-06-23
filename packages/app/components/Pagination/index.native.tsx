import { useMemo, useRef } from "react"
import { FlatList } from "react-native"
import { ACTIVE_OPACITY } from "app/components/Button"
import { Text, TouchableOpacity, View } from "app/components/ComponentWithTailwind"
import { IPaginationProps } from "./interface"
import clsx from "clsx"
import { Icon } from "../Icon"
import theme from "app/global/theme"

export const Pagination = (props: IPaginationProps) => {
  const {
    current,
    total,
    onPageChange,
  } = props

  const listRef = useRef({
    scrollToIndex: (props: any) => {},
  })

  const pageNo = useMemo(() => {
    let p: number[] = []
    for (let i = 1; i <= total; i++) {
      p.push(i)
    }
    return p
  }, [total])

  const onPageChangeFunction = (pageNo: number) => () => {
    onPageChange(pageNo)
    listRef.current.scrollToIndex({
      animated: true,
      index: pageNo - 1,
      viewPosition: 0.5
    })
  }

  const onBack = () => {
    onPageChangeFunction(current - 1)()
  }

  const onNext = () => {
    onPageChangeFunction(current + 1)()
  }

  const renderItem = ({ item }: { item: number }) => {
    const isActive = current === item

    return (
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={onPageChangeFunction(item)}
        className={clsx([
          "w-11 h-11 justify-center items-center rounded-full",
          isActive ? 'bg-primary' : 'bg-none'
        ])}
      >
        <Text className={clsx([isActive ? 'text-white' : 'text-black'])}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View className="mx-auto flex-row justify-between items-center bg-[#d9d9d9] py-2.5 rounded-lg">
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={ACTIVE_OPACITY}
        className="justify-center items-center pl-2 pr-4"
      >
        <Icon.CaretLeft weight="bold" size={28} color={current > 0 ? theme.colors.primary : theme.colors.disabled} />
      </TouchableOpacity>
      <View className="items-center justify-center rounded-full bg-[#eee]">
        <FlatList
          ref={listRef as any}
          bounces={false}
          renderItem={renderItem}
          data={pageNo}
          horizontal
          keyExtractor={item => `${item}`}
          contentContainerStyle={{ paddingVertical: 6, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        onPress={onNext}
        activeOpacity={ACTIVE_OPACITY}
        className="justify-center items-center pr-2 pl-4"
      >
        <Icon.CaretRight weight="bold" size={28} color={current < total ? theme.colors.primary : theme.colors.disabled} />
      </TouchableOpacity>
    </View>
  )
}
