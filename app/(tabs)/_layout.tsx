import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "@/constants/color";

const TabLayouts = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR.active,
        tabBarInactiveTintColor: COLOR.inactive,
        tabBarStyle: {
          backgroundColor: COLOR.white,
          borderTopColor: COLOR.border,
          borderWidth: 1,
          paddingBottom: 5,
          paddingTop: 15,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipe"
        options={{
          title: "Recipe",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayouts;
