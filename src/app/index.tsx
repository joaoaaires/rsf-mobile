import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ActivityIndicator } from "react-native";

const LOGO = require("@/assets/images/logo/logo.png");

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-[#0b0b10]">
      <Image className="h-32" source={LOGO} resizeMode="center" />
      <View className="justify-center items-center">
        <Text className="text-xl font-normal text-white">
          Rádio São Francisco
        </Text>
        <Text className="text-xl font-bold text-white">FM</Text>
      </View>
      <Text className="text-2xl font-bold text-white">87,9 FM</Text>
      <Text className="text-2xl text-[#a8a8b8FF]">
        A rádio da comunidade!
      </Text>
      <View className="mt-20">
        <ActivityIndicator size={32} color="#ff2b31FF" />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
