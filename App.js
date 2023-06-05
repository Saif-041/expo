import React, { useState } from "react";
import {View, Text, Button, Picker, TextInput, TouchableOpacity, Drawer, DrawerItem } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Components/Home';
import Footer from './Components/Footer';

function Header({navigation}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const screens = [
    {
      name: "Home",
      component: HomeScreen,
    }
  ];

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      
      <View style={{flex: 0.15}}>
        <TouchableOpacity onPress={handleOpenDrawer} >
            <Icon name="navicon" size={35} color="lightgray" />
        </TouchableOpacity>
      </View>
      
      <View style={{flex: 0.6}}>
        <Text style={{fontSize: 22, width: 35, color: '#f0edf6'}} >
          PW
        </Text>
      </View>
      
      <View style={{flex: 0.25}}>
       <Button
          onPress={() => alert('This is a button!')}
          title="Button"
        />
      </View>

    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Home Screen
         <Icon name="phone" size={30} />
      </Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App({navigation}) {


  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.02,
          backgroundColor: 'yellow',
          paddingTop: 10,
          paddingLeft: 5,
        }}>
      </View>
      <View
        style={{
          flex: 0.055,
          backgroundColor: '#694fad',
          paddingTop: 15,
          paddingLeft: 10,
        }}>
        <Header />
      </View>
      <View
        style={{
          flex: 0.865,
          backgroundColor: 'lightblue',
          paddingTop: 15,
          paddingLeft: 10,
        }}>
        <Text>
          Home Screen
        </Text>
        <HomeScreen/>
      </View>
      <View
        style={{
          flex: 0.05,
        }}>
        <Footer/>
      </View>
    </View>
  );
}

export default App;