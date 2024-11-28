import React from 'react'
import { 
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView
} from 'react-native'
import FlatList from './components/FlatList';

export default function App() : JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      {/* <View style = {styles.container}> */}
      {/* <Text style ={isDarkMode ? styles.darkModeText : styles.lightModeText}>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={true} >

      <FlatList/>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center'
  },
  darkModeText : {
    color: "#fff",
    backgroundColor : 'red'
  },
  lightModeText :{
    color: '#000',
    backgroundColor: 'blue'
  }
});