const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    'react-native-dropdown-select-list',
    'react-native-awesome-alerts',
    'expo-image-picker',
    'react-native-table-component',
    'react-native-walkthrough-tooltip',
    'moti',
  ],
}

module.exports = withExpo(nextConfig)
