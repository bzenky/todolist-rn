import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Home } from './src/screens/Home'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded
        ? <Home />
        : <Loading />
      }

      <StatusBar
        barStyle={'light-content'}
        backgroundColor='#0D0D0D'
        translucent
      />
    </ThemeProvider>
  )
}