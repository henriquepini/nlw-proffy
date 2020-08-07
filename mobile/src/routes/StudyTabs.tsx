import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 80
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "center",
          marginBottom: -30
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264b'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons name='ios-easel' size={22} color={focused ? "#8257e5" : color} />
            );
          }
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons name='ios-heart' size={22} color={focused ? "#8257e5" : color} />
            );
          }
        }}
      />
    </Navigator>
  )
};

export default StudyTabs;