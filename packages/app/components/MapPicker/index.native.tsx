import { useEffect, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import * as R from 'ramda'
import { GoogleAutoComplete } from 'react-native-google-autocomplete'
import { View } from '../ComponentWithTailwind'
import { isEmpty } from 'app/logics/validate'
import { Dimensions } from 'react-native'
import { IMapPickerProps } from './interface'
import { Dropdown } from 'app/components/Dropdown'
import { Input } from 'app/components/Input'

const { width } = Dimensions.get('window')

export const MapPicker = (props: IMapPickerProps) => {
  const { defaultLocation, googleMapsApiKey, onChangeEffect, value } = props
  const [center, setCenter] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [marker, setMarker] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [typeLat, setTypeLat] = useState('')
  const [typeLng, setTypeLng] = useState('')
  const [isReady, setIsReady] = useState(false)

  const onMapReady = () => {
    setTimeout(() => {
      setIsReady(true)
    }, 1500)
  }

  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return alert('Permission to access location was denied')
    }

    if (
      isEmpty(value?.lat) ||
      isEmpty(value?.lng) ||
      (value?.lat === defaultLocation.lat && value?.lng === defaultLocation.lng)
    ) { // default value only will set
      let location = await Location.getCurrentPositionAsync({})
      const currentLocation = {
        lat: R.pathOr(defaultLocation.lat, ['coords', 'latitude'], location),
        lng: R.pathOr(defaultLocation.lng, ['coords', 'longitude'], location),
      }
  
      setCenter(currentLocation)
      setMarker(currentLocation)
      onChangeEffect && onChangeEffect(currentLocation)
    }
  }

  const onMarkerDrag = (props) => {
    const lat = R.pathOr(defaultLocation.lat, ['nativeEvent', 'coordinate', 'latitude'], props)
    const lng = R.pathOr(defaultLocation.lat, ['nativeEvent', 'coordinate', 'longitude'], props)
    setMarker({ lat, lng })
    onChangeEffect && onChangeEffect({ lat, lng })
  }

  const typeRef = useRef({})
  const onTypeLocation = (type: 'lat' | 'lng') => (value: string) => {
    if (typeRef.current) clearTimeout(typeRef.current as any)
    typeRef.current = setTimeout(() => {
      if (type === 'lat') {
        const v = { lat: +value, lng: +(typeLng || 0) }
        setTypeLat(value)
        setCenter(v)
        setMarker(v)
        onChangeEffect && onChangeEffect(v)
      } else if (type === 'lng') {
        const v = { lat: +(typeLat || 0), lng: +value }
        setTypeLng(value)
        setCenter(v)
        setMarker(v)
        onChangeEffect && onChangeEffect(v)
      }
    }, 500)
  }

  useEffect(() => {
    requestPermission()
  }, [])

  useEffect(() => {
    if (value) {
      setCenter({ lat: value.lat, lng: value.lng })
      setMarker({ lat: value.lat, lng: value.lng })
    }
  }, [value])

  return (
    <View className="w-full mt-4">
      <View className="flex flex-1 flex-row items-center">
        <View className="flex flex-1">
          <Input
            value={typeLat}
            label="ละติจูด"
            placeholder="ระบุละติจูด"
            // transformOnChangeText={mask.numberOrDot}
            // onChangeEffect={onTypeLocation('lat')}
            onChangeEffect={console.log}
          />
        </View>
        <View className="w-4" />
        <View className="flex flex-1">
          <Input
            value={typeLng}
            label="ลองติจูด"
            placeholder="ระบุลองติจูด"
            // transformOnChangeText={mask.numberOrDot}
            // onChangeEffect={onTypeLocation('lng')}
            onChangeEffect={console.log}
          />
        </View>
      </View>
      <GoogleAutoComplete
        apiKey={googleMapsApiKey}
        debounce={300}
        queryTypes="geocode"
      >
        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => {
          const options = locationResults.map(({ place_id, structured_formatting, description }) => {
            const mainText = R.prop('main_text', structured_formatting)
            const secondaryText = R.prop('secondary_text', structured_formatting)
            const desc = description
            const label = mainText || desc || secondaryText
            return { value: place_id, key: label }
          })

          const onSelectLocation = (item: { label: string, value: string }) => {
            fetchDetails(item.value).then((value: any) => {
              const lat = R.pathOr(-999, ['geometry', 'location', 'lat'], value)
              const lng = R.pathOr(-999, ['geometry', 'location', 'lng'], value)
              if (lat !== -999 && lng !== -999 && !isEmpty(lat) && !isEmpty(lng)) { // valid
                setCenter({ lat, lng, })
                setMarker({ lat, lng, })
              }
            }).catch((e) => {
              console.log('fail to get geolocation mobile from dropdown')
            })
          }

          return (
            <View className="mt-6">
              {/* <Dropdown
                onSearchEffect={handleTextChange}
                isSearchable
                options={!isEmpty(inputValue) ? options : []}
                placeholder="ค้นหาสถานที่"
                onChangeEffect={onSelectLocation}
              /> */}
            </View>
          )
        }}
      </GoogleAutoComplete>
      <View style={{ marginTop: 14, width: width * 0.815, height: 450 }}>
        <MapView
          onMapReady={onMapReady}
          provider={PROVIDER_GOOGLE}
          style={{ width: width * 0.815, height: 450 }}
          region={isReady ? {
            latitude: center.lat,
            longitude: center.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          } : undefined}
          onMarkerDragEnd={onMarkerDrag}
        >
          <Marker
            draggable
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title="Your Location"
          />
        </MapView>
      </View>
    </View>
  )
}