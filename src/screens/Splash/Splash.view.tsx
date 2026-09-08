import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { useSplashViewModel } from "./useSplash.viewModel";

export const SplashView: FC<ReturnType<typeof useSplashViewModel>> = ({ logo }) => {
  return (
    <View className="flex-1 bg-[#0b0b10]">
      <View className="flex-1 items-center justify-center gap-6">
        <Image className="h-32" source={logo} resizeMode="contain" />
        <View className="justify-center items-center">
          <Text className="text-xl font-bold text-white">
            Rádio São Francisco FM
          </Text>
        </View>
        <View className="justify-center items-center">
          <Text className="text-2xl font-bold text-white">87,9 FM</Text>
          <Text className="text-2xl text-[#a8a8b8FF]">
            A rádio da comunidade!
          </Text>
        </View>
      </View>
      <View className="my-20">
        <ActivityIndicator size={32} color="#ff2b31FF" />
      </View>
      <StatusBar style="light" />
    </View>
  );
};
