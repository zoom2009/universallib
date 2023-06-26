import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Image, TouchableOpacity, View } from 'app/components/ComponentWithTailwind'
import { Platform } from 'react-native'
import { ACTIVE_OPACITY } from 'app/components/Button'
import { Icon } from 'app/components/Icon'
import theme from 'app/global/theme'
import dynamic from 'next/dynamic'

// @ts-ignore
const _Pinchable = dynamic(() => import('react-native-pinchable'), { ssr: false })

type TImage = { uri: string } | string
interface IImagesViewProps {
  width: number
  height: number
  images: TImage[]
  contentFit?: 'cover' | 'contain' | 'fill' | 'none'
  loop?: boolean
  autoPlay?: boolean
  backgroundColor?: string
  mobileShowArrow?: boolean
  mobileZoomable?: boolean
  isShowDot?: boolean
}

export const ImagesView = (props: IImagesViewProps) => {
  const {
    width,
    height,
    images,
    contentFit = 'contain',
    autoPlay = false,
    loop = true,
    backgroundColor = '#e9e9e9',
    mobileShowArrow = false,
    mobileZoomable = true,
    isShowDot = true,
  } = props

  const Pinchable = (Platform.OS !== 'web' && mobileZoomable) ? _Pinchable : React.Fragment
  const [Carousel, setCarousel] = useState(undefined)
  const [currentIndex, setCurrentIndex] = useState(0)
  const caroselRef = useRef()

  const next = () => {
    try {
      // @ts-ignore
      caroselRef.current.next()
    } catch (e) {
      console.log('e:', e)
    }
  }

  const previous = () => {
    try {
      // @ts-ignore
      caroselRef.current.prev()
    } catch (e) {
      console.log('e:', e)
    }
  }

  const dotArray = useMemo(() => {
    const dots: number[] = []
    for (let i = 0; i < images.length; i++) {
      dots.push(i)
    }
    return dots
  }, [images])

  useEffect(() => {
    // @ts-ignore
    import('react-native-reanimated-carousel').then(val => setCarousel(val.default))
  }, [])

  const isCanPrevious = loop || (!loop && currentIndex > 0)
  const isCanNext = loop || (!loop && currentIndex < images.length - 1)

  if (Carousel === undefined) return null

  return (
    <View style={{ width, height }} className="justify-center items-center relative">
      {(Platform.OS === 'web' || mobileShowArrow) &&
      <>
        {isCanPrevious &&
        <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="absolute z-50 left-6 rounded-full w-[36px] h-[36px] justify-center items-center" onPress={previous} activeOpacity={ACTIVE_OPACITY}>
          <Icon.CaretLeft weight="bold" size={24} color="white" />
        </TouchableOpacity>
        }
        {isCanNext &&
        <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="absolute z-50 right-6 rounded-full w-[36px] h-[36px] justify-center items-center" onPress={next} activeOpacity={ACTIVE_OPACITY}>
          <Icon.CaretRight weight="bold" size={24} color="white" />
        </TouchableOpacity>
        }
      </>
      }
      {isShowDot && (
      <View className="absolute bottom-1.5 z-50 flex flex-row">
        {dotArray.map((dotIndex) => {
          const isActive = currentIndex === dotIndex
          return <View key={`${dotIndex}`} style={{ backgroundColor: isActive ? theme.colors.success : theme.colors.muted }} className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] rounded-full mx-1 border-[0.8px] border-[#efefef]" />
}        )}
      </View>
      )}
      {/* @ts-ignore */}
      <Carousel
        ref={caroselRef as any}
        loop={loop}
        width={width}
        height={height}
        autoPlay={autoPlay}
        data={images}
        snapEnabled={Platform.OS !== 'web'}
        enabled={Platform.OS !== 'web'}
        scrollAnimationDuration={1000}
        onSnapToItem={setCurrentIndex}
        renderItem={({ item }) => (
          <View style={{ backgroundColor }} className="w-full h-full justify-center items-center rounded-xl px-4 pt-4 pb-6">
            <Pinchable>
              <Image
                contentFit={contentFit}
                style={{ width, height, borderRadius: 10 }}
                source={item as any}
              />
            </Pinchable>
          </View>
        )}
      />
    </View>
  )
}
