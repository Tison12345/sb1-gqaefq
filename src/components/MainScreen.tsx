import * as React from "react";
import { BottomNavigation } from "@nativescript/core";
import { createBottomTabNavigator } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { HistoryScreen } from "./HistoryScreen";
import { ProfileScreen } from "./ProfileScreen";
import { SearchScreen } from "./SearchScreen";

const Tab = createBottomTabNavigator();

export function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#1a472a" },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#888888",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <label text="&#xf015;" className={`fas ${focused ? 'text-white' : 'text-gray-400'}`} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <label text="&#xf002;" className={`fas ${focused ? 'text-white' : 'text-gray-400'}`} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <label text="&#xf1da;" className={`fas ${focused ? 'text-white' : 'text-gray-400'}`} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <label text="&#xf007;" className={`fas ${focused ? 'text-white' : 'text-gray-400'}`} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}