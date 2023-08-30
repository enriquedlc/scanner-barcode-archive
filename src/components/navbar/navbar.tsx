import { useRef } from "react";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { useAppNavigation } from "../../hooks/useAppNavigation";

import { BARCODE, LOGOS } from "../../../assets";
import { Home } from "../../home/home";
import { ProfileScreen } from "../../screens/profile-screen";
import { BLUE_PALLETE } from "../../constants/colors";

const Tab = createBottomTabNavigator();

const getWidth = () => {
  return (Dimensions.get("window").width - 80) / 5;
};

const getColor = (isFocused: boolean) => {
  return isFocused ? BLUE_PALLETE.BLUE : BLUE_PALLETE.GRAY;
};

export function Navbar() {
  const { navigation } = useAppNavigation();

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "relative",
            minWidth: "95%",
            bottom: 25,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.09,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
            alignSelf: "center",
          },
        }}
      >
        <Tab.Screen
          name={"HOMEc"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5 name="home" size={20} color={getColor(focused)} />
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
              navigation.navigate("HOME");
            },
          })}
        />

        <Tab.Screen
          name={"Search"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={getColor(focused)}
                />
              </View>
            ),
          }}
          listeners={() => ({
            // Onpress Update....
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() + 1,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={"ActionButton"}
          component={Home}
          options={{
            tabBarIcon: () => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: BLUE_PALLETE.BLUE,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS === "android" ? 50 : 30,
                  }}
                >
                  <Image
                    source={BARCODE.SCANNABLE_BARCODE}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: "white",
                    }}
                    alt="plus"
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name={"Notifications"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5 name="bell" size={20} color={getColor(focused)} />
              </View>
            ),
          }}
          listeners={() => ({
            // Onpress Update....
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3 + 12,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name={"Settings"}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={getColor(focused)}
                />
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4 + 16,
                useNativeDriver: true,
              }).start();
              navigation.navigate("PROFILE");
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: 40,
          height: 2,
          backgroundColor: BLUE_PALLETE.BLUE,
          position: "absolute",
          bottom: 83,
          left: "11.5%",
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </>
  );
}
