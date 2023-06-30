import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'
import { Platform } from 'react-native'
import { getImageUrlPath } from 'app/functions/getImageUrlPath'

export const resizeImage = (image: any) => new Promise((resolve, reject) => {
  const url = getImageUrlPath(image)
  const withoutBlob = Platform.OS !== 'web'

  manipulateAsync(
    url,
    [{ resize: { height: 700 } }],
    { base64: true, compress: 0.7, format: SaveFormat.JPEG },
  ).then((file) => {
    if (!withoutBlob) {
      const url = `data:image/jpeg;base64,${file.base64}`
      fetch(url)
        .then((res) => resolve(res.blob()))
        .catch(reject)
    } else {
      resolve(file.uri)
    }
  }).catch(reject)
})

/*
  -- HOW TO USE --
  const formdata = new FormData()
  const image = await resizeImage(images[j])
  if (Platform.OS === 'web') {
    formdata.append(name, image as Blob)
  } else {
    formdata.append(name, { name, type: 'image/jpeg', uri: image } as any)
  }
*/
