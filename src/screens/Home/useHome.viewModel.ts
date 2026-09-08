import { useState } from "react";

export const useHomeViewModel = () => {
  const [volume, setVolume] = useState(50);

  const handleSliderVolume = (volume: number) => setVolume(volume);

  return {
    logo: require("@/assets/images/logo/logo.png"),
    volume,
    handleSliderVolume,
  };
};
