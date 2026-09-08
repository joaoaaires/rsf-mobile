import { SplashView, useSplashViewModel } from "@/screens/Splash";

export default function Index() {
  const viewModel = useSplashViewModel();
  return <SplashView {...viewModel} />;
}
