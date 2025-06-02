import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { COLORS } from "../../styles/theme";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: COLORS.primary, tabBarInactiveBackgroundColor: COLORS.grey }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark" size={size} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={COLORS.primary} />
          ),
        }}
      />
    </Tabs>
  );
}
