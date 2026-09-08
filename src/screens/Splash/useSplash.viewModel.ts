import { useEffect } from "react";
import { useRouter } from "expo-router";

export const useSplashViewModel = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 1800);

    return () => clearTimeout(timeout);
  }, [router]);

  return {
    logo: require("@/assets/images/logo/logo.png"),
  };
};
