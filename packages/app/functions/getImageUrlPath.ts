import * as R from 'ramda'
import { isEmpty } from "app/logics/validate"
import { Platform } from 'react-native'

export const getImageUrlPath = (file: any) => {
  if (
    !isEmpty(R.prop('path', file)) &&
    Platform.OS === 'web' &&
    !file.lastModified &&
    (R.propOr('', 'path', file) as string).indexOf('http') !== -1
  ) {
    return 'none'
  }
  if (R.propOr(false, 'isWeb', file) === true || !!file.lastModified) {
    return URL.createObjectURL(file)
  }
  if (Platform.OS === 'web' && !isEmpty(R.prop('path', file)) && (R.propOr('', 'path', file) as any).indexOf('http') === -1) {
    return 'none'
  }
  if (!isEmpty(R.prop('path', file))) {
    return R.prop('path', file)
  }
  if (!isEmpty(R.prop('uri', file))) {
    return R.prop('uri', file)
  }
  if (R.type(file) === 'String' && file.indexOf('http') !== -1) {
    return file
  }
  return 'none'
}
