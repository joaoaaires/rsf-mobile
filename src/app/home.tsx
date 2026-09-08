import { HomeView, useHomeViewModel } from "@/screens/Home";

export default function Home() {
  const viewModel = useHomeViewModel();
  return <HomeView {...viewModel} />;
}
