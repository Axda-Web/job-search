import { Stack } from "expo-router";
// import { useCallback } from "react";
// import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "react-query";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // const [fontsLoaded] = useFonts({
  //   DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Stack />
    </QueryClientProvider>
  );
};

export default Layout;
