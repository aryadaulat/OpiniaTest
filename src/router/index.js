import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Homepage,
  Detail,
  Contact,
  Search,
  Chat,
  Profile,
  DetailFollowers,
  DetailFollowing,
} from '../pages';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        tabBarActiveTintColor: '#05B1A1',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-chatbubbles" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailFollowers"
        component={DetailFollowers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailFollowing"
        component={DetailFollowing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
