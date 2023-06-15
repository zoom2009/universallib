import dynamic from 'next/dynamic'
import {
  AreaChart as _AreaChart,
  BarChart as _BarChart,
  StackedAreaChart as _StackedAreaChart,
  StackedBarChart as _StackedBarChart,
  LineChart as _LineChart,
  PieChart as _PieChart,
  ProgressCircle as _ProgressCircle,
  XAxis as _XAxis,
  YAxis as _YAxis,
  Grid as _Grid,
} from 'react-native-svg-charts'

import * as _shape from 'd3-shape'

// @ts-ignore
export const AreaChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.AreaChart), { ssr: false })
// @ts-ignore
export const BarChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.BarChart), { ssr: false })
// @ts-ignore
export const StackedAreaChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.StackedAreaChart), { ssr: false })
// @ts-ignore
export const StackedBarChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.StackedBarChart), { ssr: false })
// @ts-ignore
export const LineChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.LineChart), { ssr: false })
// @ts-ignore
export const PieChart = dynamic(() => import('react-native-svg-charts').then((mod) => mod.PieChart), { ssr: false })
// @ts-ignore
export const ProgressCircle = dynamic(() => import('react-native-svg-charts').then((mod) => mod.ProgressCircle), { ssr: false })
// @ts-ignore
export const XAxis = dynamic(() => import('react-native-svg-charts').then((mod) => mod.XAxis), { ssr: false })
// @ts-ignore
export const YAxis = dynamic(() => import('react-native-svg-charts').then((mod) => mod.YAxis), { ssr: false })
// @ts-ignore
export const Grid = dynamic(() => import('react-native-svg-charts').then((mod) => mod.Grid), { ssr: false })

export const d3Shape = _shape
