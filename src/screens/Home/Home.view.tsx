import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { FC } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { useHomeViewModel } from "./useHome.viewModel";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  logo,
  volume,
  handleSliderVolume,
}) => {
  return (
    <View className="flex-1 bg-[#0b0b10]">
      <View className="px-5 py-2 flex-row justify-between items-center mb-4">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#1e1e27] border border-solid border-[#2c2c38] h-12 w-12 justify-center items-center rounded-full"
        >
          <Ionicons name="menu" size={24} color="#ffffff" />
        </TouchableOpacity>

        <View className="h-12 bg-[#1e1e27] border border-solid flex-row gap-2 border-[#2c2c38] px-4 justify-center items-center rounded-full">
          <View className="h-2 w-2 bg-red-500 rounded-full" />
          <Text className="text-white font-bold text-xl">
            AO VIVO · 87,9 FM
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#1e1e27] border border-solid border-[#2c2c38] h-12 w-12 justify-center items-center rounded-full"
        >
          <Ionicons name="share-social" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center gap-20">
        <View className="bg-white h-72 w-72 rounded-3xl justify-center items-center">
          <Image className="h-64 w-64" source={logo} resizeMode="contain" />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#354c9cFF] h-20 w-20 rounded-full justify-center items-center"
        >
          <Ionicons name="play" size={24} color="#ffffff" />
        </TouchableOpacity>

        <View className="w-full px-16 flex-row justify-center items-center gap-6">
          <Ionicons name="volume-high" size={24} color="#a8a8b8FF" />
          <View className="w-full">
            <Slider
              value={volume}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={handleSliderVolume}
              minimumTrackTintColor="#354c9cFF"
              maximumTrackTintColor="#2c2c38FF"
              thumbTintColor="#354c9cFF"
            />
          </View>
        </View>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#1e1e27] border border-solid flex-row gap-2 border-[#2c2c38] px-6 py-4 justify-center items-center rounded-full"
        >
          <Ionicons name="logo-whatsapp" size={24} color="#a8a8b8FF" />
          <Text className="text-[#a8a8b8FF] text-xl">WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#1e1e27] border border-solid flex-row gap-2 border-[#2c2c38] px-6 py-4 justify-center items-center rounded-full"
        >
          <Ionicons name="share-outline" size={24} color="#a8a8b8FF" />
          <Text className="text-xl text-[#a8a8b8FF]">Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
