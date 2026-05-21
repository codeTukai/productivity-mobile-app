import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const properties = [
  {id:"1", title: "Ghosh Villa", city: "Bankura", price: "2cr",},
  {id:"2", title: "Dey Storm", city: "Jaipur", price: "2.5cr",},
  {id:"3", title: "Beach Flat", city: "Digha", price: "3.3cr",},
]


export default function RootLayout() {


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <View style={{padding: 15}}>
          <Text>Hii there, My Name is Tukai Ghosh</Text>
          <TextInput placeholder='Search name' placeholderTextColor='#999'
          style ={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            margin: 12
          }}
          />
          <TouchableOpacity 
          onFocus={()=>(alert("Searching..."))}
          
          style={{
            backgroundColor: "#2563Eb",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems:"center"
          }}>
            <Text style ={{color: "white",fontWeight: "bold"}}>
              Search
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList 
        data={properties}
        keyExtractor={(item)=>(item.id)}
        contentContainerStyle={{padding: 16}}
        renderItem={(e)=>(
          <View
          style={{
            backgroundColor: "#f9f9f9",
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
          }}
          
          >
            <Text style={{fontWeight: "bold"}}>{e.item.title}</Text>
            <Text style={{color:"#666"}}>{e.item.title}</Text>
            <Text style={{color:"#2563eB"}}>{e.item.price}</Text>
          </View>
        )}
        />
        </SafeAreaView>
  );
}
