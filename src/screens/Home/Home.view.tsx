import { FC } from "react";
import { useHomeViewModel } from "./useHome.viewModel";
import { Text, View } from "react-native";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = () => {
  return (
    <View>
      <Text>Home View</Text>
    </View>
  );
};
