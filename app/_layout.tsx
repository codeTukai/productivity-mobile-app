import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const unstable_settings = {
  anchor: '(tabs)',
};


export default function RootLayout() {
  
  // const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <View style={{padding: 15}}>
          <Text>Hii there, My Name is Tukai Ghosh</Text>
          <TextInput placeholder='Search name' placeholderTextColor='#999'
          
          />
        </View>
        </SafeAreaView>
  );
}
