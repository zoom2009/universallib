export interface IMapPickerProps {
  googleMapsApiKey: string
  onChangeEffect: ({ lat, lng  }: { lat: number, lng: number }) => void
  defaultLocation: {
    lat: number
    lng: number
  }
  value?: {
    lat: number
    lng: number
  }
}
