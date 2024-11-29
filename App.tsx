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
import ElevatedList from './components/ElevatedList';
import FancyCard from './components/FancyCard';
import InteractiveCard from './components/InteractiveCard';
import ChatList from './components/ChatList';

export default function App() : JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      {/* <View style = {styles.container}> */}
      {/* <Text style ={isDarkMode ? styles.darkModeText : styles.lightModeText}>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text> */}
      <ScrollView showsVerticalScrollIndicator>

      <FlatList/>
      <ElevatedList />
      <FancyCard />
      <InteractiveCard />
      <ChatList />
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